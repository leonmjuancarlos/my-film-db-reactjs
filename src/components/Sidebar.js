import { FilmCard } from "./FilmCard";

export function Sidebar(props) {
  return (
    <div className="sidebar">
      <button id="sidebar-remove-btn" onClick={props.onRemoveButtonClick}>
        Remove
      </button>

      {props.addedFilms.map((filmData) => (
        <FilmCard
          key={filmData.id}
          filmData={filmData}
          scale="0.5"
          // Not clickable if is in sidebar
          onSomeCardAdded={() => {}}
        />
      ))}
    </div>
  );
}
