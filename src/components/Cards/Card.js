function Card({ trick }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "5px",
        fontSize: "12px",
        backgroundColor: "#EFF8FE",
        borderRadius: "15px",
        padding: "10px",
      }}
    >
      <p>
        {trick.stance} {trick.name}
      </p>
      <p>Obstacle: {trick.obstacle}</p>
      <p>Link to Tutorial</p>
      <a href={trick.tutorial}>{trick.tutorial}</a>
    </div>
  );
}

export default Card;

// [
//     {
//     "stance": "regular",
//     "name": "treflip",
//     "obstacle": "flat ground",
//     "tutorial": "https://www.youtube.com/watch?v=XGw3YkQmNig",
//     "id": 1
//     },
//     {
//     "stance": "switch",
//     "name": "heelflip",
//     "obstacle": "stairs",
//     "tutorial": "https://www.youtube.com/watch?v=9N9swrZU1HA",
//     "id": 2
//     },
//     {
//     "stance": "regular",
//     "name": "frontside 50-50, backside 180 out",
//     "obstacle": "ledge",
//     "tutorial": "https://www.youtube.com/watch?v=9N9swrZU1HA",
//     "id": 3
//     }
//     ]
