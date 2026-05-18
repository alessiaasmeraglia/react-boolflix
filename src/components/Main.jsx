import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";
import ResultSection from "./ResultSection";

function Main() {
    const { movies, series } = useContext(GlobalContext);
    return (
        <main className="container py-4">
            <ResultSection title="Film" items={movies} type="movie" />
            <ResultSection title="Serie TV" items={series} type="series" />
        </main>
    );
}

export default Main;