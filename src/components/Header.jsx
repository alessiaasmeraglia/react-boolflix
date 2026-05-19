import SearchBar from "./SearchBar";
import FilterSelect from "./FilterSelect";

function Header() {
    return (
        <header className="bg-black py-3 sticky-top">
            <div className="container d-flex justify-content-between align-items-center gap-3">
                <h1 className="text-danger m-0">BoolFlix</h1>

                <div  className="d-flex gap-2">
                    <FilterSelect />
                    <SearchBar />
                </div>
                
            </div>
        </header>
    );
}

export default Header;