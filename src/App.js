import "./App.css";
import "./components/FilmCard.css";
import "./components/SearchBar.css";
import { Header } from "./components/Header";
import { Billboard } from "./components/Billboard";
import { SearchBar } from "./components/SearchBar";
import { useState } from "react";

function App() {
  const [myFilms, setFilms] = useState([]);

  const handleCheckChange = (event) => {
    event.preventDefault();
    let searchText = document.getElementById("search-text");
    setFilms([]);
    setFilms([searchText.value]);
    searchText.value = "";
  };

  // <FilmCard film="Godzilla" />
  return (
    <>
      <Header />
      <div className="main-wrapper">
        <main>
          <SearchBar onCheckChange={handleCheckChange} />
          <Billboard className="billboard" filmNames={myFilms} />
        </main>
        <div className="sidebar"></div>
      </div>
    </>
  );
}

export default App;
