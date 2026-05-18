import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";

function SearchBar() {
    const { search, setSearch, searchAll } = useContext(GlobalContext);

    function handleSubmit(event) {
        event.preventDefault();
        searchAll();
    }

    return (
        <form onSubmit={handleSubmit} className="d-flex gap-2">
            <input
                type="text"
                className="form-control"
                placeholder="Cerca un film o una serie"
                value={search}
                onChange={(event) => setSearch(event.target.value)}
            />

            <button type="submit" className="btn btn-danger">
                Cerca
            </button>
        </form>
    );
}

export default SearchBar;