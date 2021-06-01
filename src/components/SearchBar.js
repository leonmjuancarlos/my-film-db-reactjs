import React from 'react'
import PropTypes from 'prop-types'

export default function SearchBar({ onCheckChange }) {
  SearchBar.propTypes = {
    onCheckChange: PropTypes.func.isRequired,
  }

  return (
    <div className="search-bar">
      <form
        onSubmit={(e) => {
          e.preventDefault()
          document.getElementById('search-btn').click()
        }}
      >
        <input id="search-text" type="text" placeholder="Search..." />
        <button type="button" id="search-btn" onClick={onCheckChange}>
          Search
        </button>
      </form>
    </div>
  )
}
