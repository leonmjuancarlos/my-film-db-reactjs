import './App.css'
import './components/FilmCard.css'
import './components/SearchBar.css'
import './components/Sidebar.css'
import { useEffect, useState } from 'react'
import {
  sidebarAddAnimation,
  sidebarRemoveAnimation,
} from './animations/sidebar'
import { Header } from './components/Header'
import { Billboard } from './components/Billboard'
import { SearchBar } from './components/SearchBar'
import { Sidebar } from './components/Sidebar'

function App() {
  const [searchedFilms, setSearchedFIlms] = useState([])
  const [addedFilms, setAddedFilms] = useState([])
  const [removeSidebar, setRemoveSidebar] = useState(false)
  useEffect(() => {
    if (removeSidebar) {
      sidebarRemoveAnimation()
      setTimeout(() => {
        setAddedFilms([])
      }, 850)
      setRemoveSidebar(false)
    }
  }, [removeSidebar])

  useEffect(async () => {
    sidebarAddAnimation()
  }, [addedFilms])

  const handleCheckChange = (event) => {
    event.preventDefault()
    const searchText = document.getElementById('search-text')
    setSearchedFIlms([])
    setSearchedFIlms([searchText.value])
    searchText.value = ''
  }

  const handleAddFilmToSidebar = (filmData) => {
    if (!addedFilms.includes(filmData)) setAddedFilms([...addedFilms, filmData])
  }

  function handleRemoveButtonClick() {
    // const sidebar = document.getElementsByClassName("sidebar")[0];

    setRemoveSidebar(true)

    /* function cardsRemoveEffect() {
      if (addedFilms.length !== 0 && sidebar.getElementsByClassName("card")) {
        const sidebarCardArray = sidebar.getElementsByClassName("card");

        const firstCardOffsetTop =
          sidebarCardArray[0].getElementsByTagName("img")[0].offsetTop;

        for (let i = 0; i < sidebarCardArray.length; i++) {
          if (i === 0) continue;
          const el = sidebarCardArray[i];

          const elOffsetLeft = sidebarCardArray[i].offsetLeft;
          const elOffsetTop = sidebarCardArray[i].offsetTop;
          el.style.position = "absolute";
          el.style.top = `${elOffsetTop}px`;
          el.style.left = `${
            elOffsetLeft - parseInt(el.style.marginLeft, 10)
          }px`;

           setTimeout(() => {
            el.style.transform = `translateY(
            -${firstCardOffsetTop + 422 + 32}px)`;
          }, 100);

          //el.style.transform = "translateY(-2rem)";
        }
      }
    } */
    // cardsRemoveEffect();
    // setTimeout(() => setAddedFilms([]), 800);
    // setAddedFilms([]);
  }

  // <FilmCard film="Godzilla" />
  return (
    <>
      <Header />
      <div className="main-wrapper">
        <main>
          {' '}
          <SearchBar onCheckChange={handleCheckChange} />{' '}
          <Billboard
            className="billboard"
            filmNames={searchedFilms}
            onSomeCardAdded={handleAddFilmToSidebar}
          />
        </main>
        <Sidebar
          addedFilms={addedFilms}
          onRemoveButtonClick={handleRemoveButtonClick}
        />
      </div>
    </>
  )
}

export default App
