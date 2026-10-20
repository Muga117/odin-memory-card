import { useState } from "react";
import "./App.css";
import Image from "./assets/img.jpg";

function App() {
  return (
    <>
      <header>
        <div className="text-container">
          <h1>The Eminence In Shadow Memory Game</h1>
          <p>Pick a card but don't pick the same card twice.</p>
        </div>

        <div className="score-container">
          <h2>High Score:</h2>
          <h2>Current Score: </h2>
        </div>
      </header>

      <main>
        <div class="card">
          <img src={Image} />
          <p>card 1</p>
        </div>

        <div class="card">
          <img src={Image} />
          <p>card 2</p>
        </div>

        <div class="card">
          <img src={Image} />
          <p>card 3</p>
        </div>

        <div class="card">
          <img src={Image} />
          <p>card 4</p>
        </div>

        <div class="card">
          <img src={Image} />
          <p>card 5</p>
        </div>

        <div class="card">
          <img src={Image} />
          <p>card 6</p>
        </div>

        <div class="card">
          <img src={Image} />
          <p>card 7</p>
        </div>

        <div class="card">
          <img src={Image} />
          <p>card 8</p>
        </div>

        <div class="card">
          <img src={Image} />
          <p>card 9</p>
        </div>

        <div class="card">
          <img src={Image} />
          <p>card 10</p>
        </div>
      </main>
    </>
  );
}

export default App;
