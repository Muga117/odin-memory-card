export function Card(props) {
  return (
    <div key={props.id} className="card" onClick={props.onClick}>
      <img src={props.image} />
      <p>{props.name}</p>
    </div>
  );
}
