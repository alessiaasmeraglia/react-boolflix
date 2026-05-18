function Card({ movie }) {
    return (
        <li className="list-group-item">
            <h3>{movie.title}</h3>

            <p>
                <strong>Titolo originale:</strong> {movie.original_title}
            </p>

            <p>
                <strong>Lingua:</strong> {movie.original_language}
            </p>

            <p>
                <strong>Voto:</strong> {movie.vote_average}
            </p>
        </li>
    );
}

export default Card;