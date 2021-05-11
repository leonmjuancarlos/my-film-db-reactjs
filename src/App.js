import "./App.css";
import "./components/FilmCard.css";
import "./components/SearchBar.css";
import { Header } from "./components/Header";
import { Billboard } from "./components/Billboard";
import { SearchBar } from "./components/SearchBar";
import { useEffect, useState } from "react";
import { FilmCard } from "./components/FilmCard";

function App() {
  const [searchedFilms, setSearchedFIlms] = useState([]);
  const [addedFilms, setAddedFilms] = useState([]);

  useEffect(() => {
    async function cardAddAnimation() {
      const sidebar = document.getElementsByClassName("sidebar")[0];
      const lastCard = sidebar.lastChild;
      if (lastCard) {
        lastCard.style.transition = "transform 1s";
        lastCard.style.transform = "scale(1)";
      }
    }

    cardAddAnimation();
  });

  const handleCheckChange = (event) => {
    event.preventDefault();
    let searchText = document.getElementById("search-text");
    setSearchedFIlms([]);
    setSearchedFIlms([searchText.value]);
    searchText.value = "";
  };

  const handleAddFilmToSidebar = (filmData) => {
    if (!addedFilms.includes(filmData))
      setAddedFilms([...addedFilms, filmData]);
  };

  // <FilmCard film="Godzilla" />
  return (
    <>
      <Header />
      <div className="main-wrapper">
        <main>
          <SearchBar onCheckChange={handleCheckChange} />
          <Billboard
            className="billboard"
            filmNames={searchedFilms}
            onSomeCardAdded={handleAddFilmToSidebar}
          />
        </main>
        <div className="sidebar">
          {addedFilms.map((filmData) => (
            <FilmCard key={filmData.id} filmData={filmData} scale="0.5" />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
