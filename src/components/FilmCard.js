import { putCovers } from '../animations/covers'

export function FilmCard(props) {
  // props: filmData (title, image, id)

  return (
    <div
      className="card"
      onMouseOver={() => putCovers()}
      onClick={() => {
        props.onSomeCardAdded(props.filmData)
      }}
      style={{ transform: `scale(${props.scale || 1})` }}
    >
      <img
        className="cover"
        src={props.filmData.image}
        alt={props.filmData.title}
      />
      <div className="card-info">
        <p>{props.filmData.title.toUpperCase()}</p>
      </div>
    </div>
  )
}
