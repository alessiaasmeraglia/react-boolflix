import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";
import Card from "./Card";


function ResultSection() {
    const { movies } = useContext(GlobalContext);

    
    return (
        <section>
            <h2>Film</h2>

            <ul className="list-group">
                {movies.map((movie) => {
                    return <Card key={movie.id} movie={movie} />;
                })}
            </ul>
        </section>
    );
}

export default ResultSection;