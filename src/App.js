import React, { useEffect, useState } from 'react'
import './App.css'
import './components/FilmCard.css'
import './components/SearchBar.css'
import './components/Sidebar.css'

import {
  sidebarAddAnimation,
  sidebarRemoveAnimation,
  toggleSidebar,
} from './animations/sidebar'
import Header from './components/Header'
import Billboard from './components/Billboard'
import SearchBar from './components/SearchBar'
import Sidebar from './components/Sidebar'

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

  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    toggleSidebar(isOpen)
    console.log(isOpen)
  }, [isOpen])

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
    setRemoveSidebar(true)
  }

  // <FilmCard film="Godzilla" />
  return (
    <>
      <Header />
      <div className="main-wrapper">
        <main>
          <button
            type="button"
            id="sidebar-toggle-btn"
            onClick={() => {
              setIsOpen(!isOpen)
            }}
          >
            Toggle
          </button>
          <SearchBar onCheckChange={handleCheckChange} />
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
