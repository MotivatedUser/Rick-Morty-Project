import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./components/UI/Header";
import CharacterGrid from "./components/UI/characters/CharacterGrid";
import Search from "./components/UI/Search";
import Footer from "./components/Footer";
import "./App.css";

const App = () => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const [ query, setQuery ] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(`https://rickandmortyapi.com/api/character?name=${query}`);

      console.log(result.data);
      setItems(result.data);
      setIsLoading(false);
    };
    fetchItems();
  }, [query]);

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isLoading={isLoading} items={items.results} />
      <Footer />
    </div>
  );
};

export default App;
