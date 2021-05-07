import { getFilmByName } from "../API/Search"
import React, { useState, useEffect } from "react";


export function FilmCard(props) {

    //props: filmData (title, image, id)

    return (
        <div className="card">
            <img src={props.filmData.image} />
        </div>
    )


}