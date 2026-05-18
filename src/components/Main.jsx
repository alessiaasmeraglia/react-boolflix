import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";
import ResultSection from "./ResultSection";

function Main() {
    const { movies, series, isLoading, hasSearched } = useContext(GlobalContext);

    const hasResults = movies.length > 0 || series.length > 0;

    return (
        <main className="container py-4">
            {!hasSearched && (
                <p className="text-secondary">
                    Cerca un fil o una serie TV per iniziare.
                </p>
            )}

            {isLoading && <p>Caricamento...</p>}

            {hasSearched && !isLoading && !hasResults &&(
                <p className="text-secondary">Nessun risultato trovato.</p>
            )}

            {!isLoading && (
                <>
                    <ResultSection title="Film" items={movies} type="movie" />
                    <ResultSection title="Serie TV" items={series} type="series" />
                </>
            )}
        </main>
    );
}

export default Main;