
export function SearchBar(props) {


    return (
        <>
            <input
                id="search-text"
                type="text"
                placeholder="Search..."
            />
            <button
                onClick={props.onCheckChange}

            >Search</button>
        </>
    )
}