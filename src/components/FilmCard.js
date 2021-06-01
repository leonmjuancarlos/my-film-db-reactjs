import React from 'react'
import PropTypes from 'prop-types'
import putCovers from '../animations/covers'

export default function FilmCard({ filmData, onSomeCardAdded, scale }) {
  // props: filmData (title, image, id)
  FilmCard.propTypes = {
    filmData: PropTypes.objectOf(PropTypes.object).isRequired,
    onSomeCardAdded: PropTypes.func.isRequired,
    scale: PropTypes.number,
  }
  FilmCard.defaultProps = {
    scale: 0,
  }

  return (
    <div
      role="textbox"
      tabIndex="-1"
      className="card"
      onMouseOver={() => putCovers()}
      onFocus={() => putCovers()}
      onClick={() => {
        onSomeCardAdded(filmData)
      }}
      onKeyPress={() => {}}
      style={{ transform: `scale(${scale || 1})` }}
    >
      <img className="cover" src={filmData.image} alt={filmData.title} />
      <div className="card-info">
        <p>{filmData.title.toUpperCase()}</p>
      </div>
    </div>
  )
}
