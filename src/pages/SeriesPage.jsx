import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";
import ResultSection from "../components/ResultSection";

function SeriesPage() {
    const { series, isLoading, hasSearched, selectedGenre } =
        useContext(GlobalContext);

    const filteredSeries =
        selectedGenre === ""
            ? series
            : series.filter((serie) => {
                return serie.genre_ids.includes(Number(selectedGenre));
            });

    return (
        <>
            {!hasSearched && (
                <p className="text-secondary">Cerca una serie TV per iniziare.</p>
            )}

            {isLoading && <p>Caricamento...</p>}

            {hasSearched && !isLoading && filteredSeries.length === 0 && (
                <p className="text-secondary">Nessuna serie TV trovata.</p>
            )}

            {!isLoading && (
                <ResultSection title="Serie TV" items={filteredSeries} type="series" />
            )}
        </>
    );
}

export default SeriesPage;