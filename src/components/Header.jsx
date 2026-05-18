import SearchBar from "./SearchBar";

function Header() {
    return (
        <header className="bg-black py-3 sticky-top">
            <div className="container d-flex justify-content-between align-items-center gap-3">
                <h1 className="text-danger m-0">BoolFlix</h1>
                <SearchBar />
            </div>
        </header>
    );
}

export default Header;