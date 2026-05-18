import Card from "./Card";


function ResultSection({ title, items, type }) {
        
    return (
        <section className="mb-4">
            <h2>{title}</h2>

            <ul className="list-group">
                {items.map((item) => {
                    return <Card key={item.id} item={item} type={type} />;
                })}
            </ul>
        </section>
    );
}

export default ResultSection;