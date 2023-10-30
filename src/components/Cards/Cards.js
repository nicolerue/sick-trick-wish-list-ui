import { useEffect, useState } from "react";
import { getTricksApi } from "../../apiCall";
import Card from "./Card";

function Cards({ tricks }) {
  return (
    <div
      data-cy="cards-display"
      style={{
        display: "flex",
        gap: "20px",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {tricks.map((trick) => {
        return <Card key={trick.id} trick={trick} />;
      })}
    </div>
  );
}

export default Cards;
