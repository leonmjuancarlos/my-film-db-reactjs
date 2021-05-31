import React, { useState, useEffect } from 'react'
import { getFilmByName } from '../API/Search'
import { FilmCard } from './FilmCard'

export function Billboard(props) {
  const [filmResults, setFilmResults] = useState([])

  // Is executed only one time ", []"
  useEffect(() => {
    setFilmResults([])
    const { filmNames } = props

    async function callAPI() {
      // if searchbar text === ''
      if (filmNames[0] === '') return

      filmNames.map(async (filmName) => {
        const data = await getFilmByName(filmName)
        setFilmResults((filmRes) => filmRes.concat([data]))
      })
    }

    // This is due to useEffect WARNING
    callAPI()
  }, [props.filmNames]) // Dependencies

  const cleanData = getTitlesFromResponse(filmResults)
  /*
        cleanData == [
            [
                {id, img, title}
                {id, img, title}
                ...
            ],
            [
                {id, img, title}
                {id, img, title}
                ...
            ]
        ]
    */

  // FilmCard receive all film data (id, image, title)
  const listCard = cleanData.map((d) =>
    d.map((d1) => (
      <FilmCard
        key={`${d1.image}${d1.id}`}
        filmData={d1}
        onSomeCardAdded={props.onSomeCardAdded}
      />
    ))
  )

  if (filmResults.length === 0) return null

  // Conditional rendering
  return cleanData.length >= props.filmNames.length ? (
    <div className="billboard">{listCard}</div>
  ) : (
    // Loading Spinner
    <div className="lds-ring">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )
}

/*
    API JSON RESPONSE
{
    "titles":[
                0:{
                    "title":"Inception"
                    "image":"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@.jpg"
                    "id":"tt1375666"
                }
                1:{...}3 items
                2:{...}3 items
                3:{...}3 items
            ]
    "names":[]0 items
    "companies":[3 items
    0:{...}3 items
    1:{...}3 items
    2:{...}3 items
    ]
}
*/

function getTitlesFromResponse(arr) {
  return arr.map((req) => req.titles.map((title) => title))
}
