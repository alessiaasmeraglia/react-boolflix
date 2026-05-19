import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="text-center py-5">
            <h2>404 - Pagina non trovata</h2>
            <p className="text-secondary">La pagina che cerchi non esiste.</p>
            <Link to="/" className="btn btn-danger">
                Torna alla Home
            </Link>
        </div>
    );
}

export default NotFound;