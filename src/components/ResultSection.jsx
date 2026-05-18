import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";
import Card from "./Card";
import GlobalProvider from "../contexts/GlobalProvider";

function ResultSection() {
    const { movies } = useContext(GlobalContext);

    return (
        <section>
            <h2>Film</h2>

            <ul>
                {movies.map((movie) => {
                    <Card key={movie.id} movie = {movie}/>
                })}
            </ul>
        </section>
    );
}

export default ResultSection;