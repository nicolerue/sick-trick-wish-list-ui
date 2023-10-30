import { useState } from "react";
import "./Form.css";

function Form({ tricks, setTricks }) {
  const [stance, setStance] = useState("");
  const [name, setName] = useState("");
  const [obstacle, setObstacle] = useState("");
  const [tutorial, setTutorial] = useState("");
  function handleSubmit(e) {
    e.preventDefault();

    if (!stance || !name || !obstacle || !tutorial) {
      window.alert("please fill in all the fields");
      return;
    }

    const newTrick = { stance, name, obstacle, tutorial, id: Date.now() };

    setTricks((tricks) => [...tricks, newTrick]);

    setStance("");
    setName("");
    setObstacle("");
    setTutorial("");
  }
  return (
    <form
      data-cy="form"
      onSubmit={handleSubmit}
      style={{
        display: "flex",
        gap: "10px",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: "30px",
      }}
    >
      <select
        data-cy="form-stance"
        value={stance}
        name="stance"
        id="stance"
        onChange={(e) => setStance(e.target.value)}
      >
        <option value={stance}>Choose Your Stance</option>
        <option value="Regular">Regular</option>
        <option value="Switch">Switch</option>
      </select>
      <input
        data-cy="form-name"
        placeholder="Name of Trick"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <select
        data-cy="form-obstacle"
        value={obstacle}
        name="obstacle"
        id="obstacle"
        onChange={(e) => setObstacle(e.target.value)}
      >
        <option value={obstacle}>Choose Your Obstacle</option>
        <option value="Flatground">Flatground</option>
        <option value="Ledge">Ledge</option>
        <option value="Rail">Rail</option>
        <option value="Stairs">Stairs</option>
        <option value="Pool">Pool</option>
      </select>
      <input
        data-cy="form-tutorial"
        value={tutorial}
        placeholder="Link to Tutorial"
        onChange={(e) => setTutorial(e.target.value)}
      />
      <button data-cy="form-submit" type="submit">
        Send it!
      </button>
    </form>
  );
}

export default Form;
