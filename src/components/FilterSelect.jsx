import { useContext } from "react";
import GlobalContext from "../contexts/GlobalContext";

function FilterSelect() {
    const { movieGenres, seriesGenres, selectedGenre, setSelectedGenre } =
        useContext(GlobalContext);

    const allGenres = [...movieGenres, ...seriesGenres];

    const uniqueGenres = allGenres.filter((genre, index, array) => {
        return array.findIndex((item) => item.id === genre.id) === index;
    });

    return (
        <select
            className="form-select filter-select"
            value={selectedGenre}
            onChange={(event) => setSelectedGenre(event.target.value)}
        >
            <option value="">Tutti i generi</option>

            {uniqueGenres.map((genre) => {
                return (
                    <option key={genre.id} value={genre.id}>
                        {genre.name}
                    </option>
                );
            })}
        </select>
    );
}

export default FilterSelect;