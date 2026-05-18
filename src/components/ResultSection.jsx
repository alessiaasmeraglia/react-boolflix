import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";
import Card from "./Card";


function ResultSection( title, items, type ) {
        
    return (
        <section className="mb-4">
            <h2>{title}</h2>

            <ul className="list-group">
                {items.map((item) => {
                    return <Card key={item.id} movie={item} />;
                })}
            </ul>
        </section>
    );
}

export default ResultSection;