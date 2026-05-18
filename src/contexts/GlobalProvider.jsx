import { useState } from "react";
import GlobalContext from "./GlobalContext";

const apiKey = import.meta.env.VITE_TMDB_API_KEY;

function GlobalProvider({ children }) {
    const [search, setSearch] = useState("");
    const [movies, setMovies] = useState([]);

    function searchMovies() {
        fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=it-IT&query=${search}`
        )
            .then((response) => response.json())
            .then((data) => {
                console.log(data.results);
                setMovies(data.results);
            });
    }

    const value = {
        search,
        setSearch,
        movies,
        searchMovies,
    };

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    );
}

export default GlobalProvider;