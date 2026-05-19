import { getLanguage } from "../utils/flags";
import { getPosterUrl } from "../utils/images";
import { getRating } from "../utils/rating";

function Card({ item, type }) {
    const title = type === "movie" ? item.title : item.name;
    const originalTitle = type === "movie" ? item.original_title : item.original_name;

    const language = getLanguage(item.original_language);
    const posterUrl = getPosterUrl(item.poster_path);
    const rating = getRating(item.vote_average);

    return (
        <article className="movie-card">
            <img src={posterUrl} alt={title} className="movie-card-poster" />

            <div className="movie-card-info">
                <h3 className="movie-card-title">{title}</h3>

                <p>
                    <strong>Titolo originale:</strong> {originalTitle}
                </p>

                <p>
                    <strong>Lingua:</strong> {language.flag} {language.name}
                </p>

                <p>
                    <strong>Voto:</strong>{" "}
                    {[1, 2, 3, 4, 5].map((star) => {
                        return (
                            <span key={star}>
                                {star <= rating ? "★" : "☆"}
                            </span>
                        );
                    })}
                </p>

                <p>
                    <strong>Cast:</strong>{" "}
                    {item.cast && item.cast.length > 0
                        ? item.cast.join(", ")
                        : "Cast non disponibile"}
                </p>

                <p>
                    <strong>Generi:</strong>{" "}
                    {item.genres && item.genres.length > 0
                        ? item.genres.join(", ")
                        : "Generi non disponibili"}
                </p>

                <p className="movie-card-overview">
                    <strong>Overview:</strong>{" "}
                    {item.overview || "Overview non disponibile."}
                </p>
            </div>
        </article>
    );
}

export default Card;