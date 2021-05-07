
export function FilmCard(props) {

    //props: filmData (title, image, id)

    return (
        <div className="card">
            <img src={props.filmData.image} />
        </div>
    )


}