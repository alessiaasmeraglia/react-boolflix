import SearchBar from "./SearchBar";

function Header() {
    return (
        <header className="container py-4">
            <div className="d-flex justify-content-between align-items-center">
                <h1 className="text-danger">BoolFlix</h1>
                <SearchBar />
            </div>
        </header>
    );
}

export default Header;