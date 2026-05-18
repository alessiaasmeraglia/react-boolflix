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
        <li className="list-group-item">
            <img src={posterUrl} alt={title} className="img-fluid mb-3" />
            <h3>{title}</h3>

            <p>
                <strong>Titolo originale:</strong> {originalTitle}
            </p>

            <p>
                <strong>Lingua:</strong> {language.flag} {language.name}
            </p>

            <p>
                <strong>Voto:</strong> {rating}
            </p>
        </li>
    );
}

export default Card;