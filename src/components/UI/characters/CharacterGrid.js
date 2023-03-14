import React from "react";
import CharacterItem from "./CharacterItem";

const CharacterGrid = ({ items = [], isLoading }) => {
  const someItems = items.slice(0, 20);

  return isLoading ? (
    <h1>Loading...</h1>
  ) : (
    <section className="cards">
      {someItems.map((item) => (
        <CharacterItem item={item} key={item.id} />
      ))}
    </section>
  );
};

export default CharacterGrid;
