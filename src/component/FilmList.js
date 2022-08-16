import React from "react";
import Film from "./Film";

const FilmList = ({films}) => {
    const filmNodes = films.map((film, index) => {
        return <Film name={film.name} url={film.url} key={index}/>
    })



    return(
        <>
        {filmNodes}
        <a href=" https://www.imdb.com/calendar/?region=gb">
            <button>View More Upcoming Releases</button>
        </a>
        </>
    )
}

export default FilmList;