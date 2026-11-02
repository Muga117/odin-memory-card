import { useEffect, useState } from "react";
import "./App.css";
import { Card } from "./Card";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function App() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [characters, setCharacters] = useState([]);
  const [cards, setCards] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [highScore, setHighScore] = useState(0);

  function scoreHandler(card) {
    setCharacters(shuffleArray(characters));
    if (cards.includes(card)) {
      if (currentScore > highScore) {
        setHighScore(currentScore);
      }
      setCurrentScore(0);
      setCards([]);
    } else {
      setCards([...cards, card]);
      setCurrentScore(currentScore + 1);
    }
  }

  var query = `query Query($mediaId: Int, $sort: [CharacterSort], $perPage: Int) {
  Media(id: $mediaId) {
    characters(sort: $sort, perPage: $perPage) {
      nodes {
        name {
          full
        }
        image {
          large
        }
        id
      }
    }
  }
}`;

  var variables = {
    mediaId: 130298,
    sort: "RELEVANCE",
    perPage: 10,
  };

  var url = "https://graphql.anilist.co",
    options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        query: query,
        variables: variables,
      }),
    };

  useEffect(() => {
    fetch(url, options)
      .then((response) => {
        return response.json();
      })
      .then((response) => {
        setCharacters(response.data.Media.characters.nodes);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <header>
        <div className="text-container">
          <h1>The Eminence In Shadow Memory Game</h1>
          <p>Pick a card but don't pick the same card twice.</p>
        </div>

        <div className="score-container">
          <h2>High Score: {highScore}</h2>
          <h2>Current Score: {currentScore}</h2>
        </div>
      </header>

      <main>
        {characters.map((character) => (
          <Card
            key={character.id}
            image={character.image.large}
            name={character.name.full}
            onClick={() => scoreHandler(character.id)}
          />
        ))}
      </main>
    </>
  );
}

export default App;
