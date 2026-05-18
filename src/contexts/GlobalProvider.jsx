import { useEffect,useState } from "react";
import GlobalContext from "./GlobalContext";

const apiKey = import.meta.env.VITE_TMDB_API_KEY;

function GlobalProvider({ children }) {
    const [search, setSearch] = useState("");
    const [movies, setMovies] = useState([]);
    const [series, setSeries] = useState([]);
    const [movieGenres, setMovieGenres] = useState([]);
    const [seriesGenres, setSeriesGenres] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [hasSearched, setHasSearched] = useState(false);

    function searchAll() {
        if (search.trim() === "") {
            return;
        }

        setIsLoading(true);
        setHasSearched(true);

        Promise.all([
            fetch(
                `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=it-IT&query=${search}`
            ).then((response) => response.json()),

            fetch(
                `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&language=it-IT&query=${search}`
            ).then((response) => response.json()),
        ])
            .then(([moviesData, seriesData]) => {
                setMovies(moviesData.results);
                setSeries(seriesData.results);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    const value = {
        search,
        setSearch,
        movies,
        series,
        isLoading,
        hasSearched,
        searchAll,
    };

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    );
}

export default GlobalProvider;