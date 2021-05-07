import React, { useState, useEffect } from "react";
import { getFilmByName } from "../API/Search"
import { FilmCard } from "./FilmCard";


export function Billboard(props) {

    const [filmResults, setFilmResults] = useState([])

    // Is executed only one time ", []"
    useEffect(() => {

        const filmNames = props.filmNames;

        async function callAPI() {
            filmNames.map( async (filmName) => {
                const data = await getFilmByName(filmName)
                setFilmResults(filmRes => filmRes.concat([data]))
            })
        }

        // This is due to useEffect WARNING
        callAPI()

    }, [props.filmNames]) // Dependencies


    let cleanData = removeDuplicates(filmResults)
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
    let listCard = cleanData.map(d =>
        d.map(d1 =>
            <FilmCard
                key={`${d1.image}${d1.id}`}
                filmData={d1}
            />
        )
    )

    // Conditional rendering
    return ( cleanData.length >= props.filmNames.length ?
        (
            <div className="billboard">
                {listCard}
            </div>
        ) :
        (
            // Loading Spinner
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
}