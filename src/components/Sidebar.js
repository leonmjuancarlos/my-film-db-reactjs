import React from 'react'
import PropTypes from 'prop-types'
import FilmCard from './FilmCard'

export default function Sidebar({ addedFilms, onRemoveButtonClick }) {
  Sidebar.propTypes = {
    addedFilms: PropTypes.arrayOf(PropTypes.string).isRequired,
    onRemoveButtonClick: PropTypes.func.isRequired,
  }

  return (
    <div className="sidebar">
      <button
        type="button"
        id="sidebar-remove-btn"
        onClick={onRemoveButtonClick}
      >
        Remove
      </button>

      {addedFilms.map((filmData) => (
        <FilmCard
          key={filmData.id}
          filmData={filmData}
          scale="0.5"
          // Not clickable if is in sidebar
          onSomeCardAdded={() => {}}
        />
      ))}
    </div>
  )
}
