export function SearchBar(props) {
  return (
    <div className="search-bar">
      <form>
        <input id="search-text" type="text" placeholder="Search..." />
        <button
          id="search-btn"
          onClick={props.onCheckChange}
          onKeyPress={(e) => {
            if (e.key === 13) document.getElementById("search-btn").click();
          }}
        >
          Search
        </button>
      </form>
    </div>
  );
}
