import { useEffect, useState } from "react";
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

    useEffect(() => {
        Promise.all([
            fetch(
                `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=it-IT&query=${search}`
            ).then((response) => response.json()),

            fetch(
                `https://api.themoviedb.org/3/genre/tv/list?api_key=${apiKey}&language=it-IT`
            ).then((response) => response.json()),
        ]).then(([movieGenresData, seriesGenresData]) => {
            setMovieGenres(movieGenresData.genres);
            setSeriesGenres(seriesGenresData.genres);
        });
    }, []);

    function getGenreNames(genreIds, genresList) {
        return genreIds
            .map((genreId) => {
                const genre = genresList.find((genre) => genre.id === genreId);
                return genre ? genre.name : null;
            })
            .filter((genreName) => genreName !== null);
    }

    function getCredits(itemId, type) {
        const endpoint = type === "movie" ? "movie" : "tv";

        return fetch(
            `https://api.themoviedb.org/3/${endpoint}/${itemId}/credits?api_key=${apiKey}&language=it-IT`
        )
            .then((response) => response.json())
            .then((data) => {
                return data.cast.slice(0, 5).map((actor) => actor.name);
            });
    }

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
                const moviesWithDetailsPromises = moviesData.results.map((movie) => {
                    return getCredits(movie.id, "movie").then((cast) => {
                        return {
                            ...movie,
                            cast,
                            genres: getGenreNames(movie.genre_ids, movieGenres),
                        };
                    });

                });

                const seriesWithDetailsPromises = seriesData.results.map((serie) => {
                    return getCredits(serie.id, "series").then((cast) => {
                        return {
                            ...serie,
                            cast,
                            genres: getGenreNames(serie.genre_ids, seriesGenres),
                        };
                    });
                });
                return Promise.all([
                    Promise.all(moviesWithDetailsPromises),
                    Promise.all(seriesWithDetailsPromises),
                ]);
            })
            .then(([moviesWithDetails, seriesWithDetails]) => {
                setMovies(moviesWithDetails);
                setSeries(seriesWithDetails);
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