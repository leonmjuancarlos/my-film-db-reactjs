import React, { useState, useEffect } from "react";
import { getFilmByName } from "../API/Search"
import { FilmCard } from "./FilmCard";
import axios from "axios";


export function Billboard(props) {

    const filmNames = props.filmNames;

    const [filmResults, setFilmResults] = useState([])

    useEffect(async () => {

        for (let filmName of filmNames) {
            const data = await getFilmByName(filmName)
            setFilmResults(filmRes => filmRes.concat([data]))
        }

            /*for(let filmName of filmNames) {
                getFilmByName(filmName)
                    .then( data => {

                        setFilmResults(filmResults.concat([data]))

                    })
            }
            getFilmByName()
            */

    }, [])


    let cleanData = removeDuplicates(filmResults)
    let listCard = cleanData.map(d => d.map(d1 => <FilmCard key={`${d1.image}${d1.id}`} filmData={d1} />))
    /*
    let searchResults = []
    if (filmResults.length === filmNames.length) {
        // each have (title, imgURL, id)
        searchResults = filmResults.map( (searchData) => {
            return searchData.titles.map( (filmData) => {
                return filmData
            })
        })

    }

    let flatSearchResults = searchResults.flat();
*/


    // Conditional rendering

    return ( cleanData.length >= filmNames.length ?
        (
            <div className="billboard">
                {listCard}
            </div>
        ) :
        (
            <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
        )

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

function removeDuplicates(arr) {

    let newArr = []

    for (let i = 0; i < arr.length; i++) {

        if (newArr.length === 0) {
            newArr.push(arr[i])
        } else if (newArr !== undefined && arr !== undefined) {
            if (newArr.map(d => d.titles["0"].title).includes(arr[i].titles["0"].title)) {

            } else {
                newArr.push(arr[i])
            }
        }

    }


    return newArr.map( search => {
        return search.titles.map( title => {
            return title
        })
    })

    /*
    console.log(arr.map((data) => {
        return data.titles["0"]
    }))
    */



}