const imageBaseUrl = "https://image.tmdb.org/t/p/w342";

export function getPosterUrl(posterPath) {
    if (!posterPath) {
        return "https://placehold.co/342x513?text=No+Image";
    }

    return `${imageBaseUrl}${posterPath}`;
}