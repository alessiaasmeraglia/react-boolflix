import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";
import ResultSection from "../components/ResultSection";

function MoviesPage() {
    const { movies, isLoading, hasSearched, selectedGenre } =
        useContext(GlobalContext);

    const filteredMovies =
        selectedGenre === ""
            ? movies
            : movies.filter((movie) => {
                return movie.genre_ids.includes(Number(selectedGenre));
            });

    return (
        <>
            {isLoading && <p>Caricamento...</p>}

            {hasSearched && !isLoading && filteredMovies.length === 0 && (
                <p className="text-secondary">Nessun film trovato.</p>
            )}

            {!isLoading && (
                <ResultSection title="Film" items={filteredMovies} type="movie" />
            )}
        </>
    );
}

export default MoviesPage;