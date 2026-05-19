import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";
import ResultSection from "./ResultSection";

function Main() {
    const { movies, series, isLoading, hasSearched, selectedGenre } = useContext(GlobalContext);

    const filteredMovies =
        selectedGenre === ""
            ? movies
            : movies.filter((movie) => {
                return movie.genre_ids.includes(Number(selectedGenre));
            });

    const filteredSeries =
        selectedGenre === ""
            ? series
            : series.filter((serie) => {
                return serie.genre_ids.includes(Number(selectedGenre));
            });

    const hasResults = movies.length > 0 || series.length > 0;

    return (
        <main className="container py-4">
            {!hasSearched && (
                <p className="text-secondary">
                    Cerca un film o una serie TV per iniziare.
                </p>
            )}

            {isLoading && <p>Caricamento...</p>}

            {hasSearched && !isLoading && !hasResults && (
                <p className="text-secondary">Nessun risultato trovato.</p>
            )}

            {!isLoading && (
                <>
                    <ResultSection title="Film" items={filteredMovies} type="movie" />
                    <ResultSection title="Serie TV" items={filteredSeries} type="series" />
                </>
            )}
        </main>
    );
}

export default Main;