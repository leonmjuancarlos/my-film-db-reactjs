import "./App.css";
import "./components/FilmCard.css";
import { Header } from "./components/Header";
import { Billboard } from "./components/Billboard";
import { SearchBar } from "./components/SearchBar";
import { useState } from "react";

function App() {
  const [myFilms, setFilms] = useState([]);

  const handleCheckChange = () => {
    let searchText = document.getElementById("search-text");
    setFilms([]);
    setFilms([searchText.value]);
    searchText.value = "";
  };

  // <FilmCard film="Godzilla" />
  return (
    <>
      <Header />
      <SearchBar onCheckChange={handleCheckChange} />
      <Billboard className="billboard" filmNames={myFilms} />
    </>
  );
}

export default App;
