import Card from "./Card";

function ResultSection({ title, items, type }) {
        
    return (
        <section className="mb-5">
            <h2 className="mb-3">{title}</h2>

            <div className="row g-4">
                {items.map((item) => {
                    return (
                        <div key={item.id} className="col-6 col-md-4 col-lg-3 col-xl-2"> 
                            <Card item={item} type={type} />
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default ResultSection;