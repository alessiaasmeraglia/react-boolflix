import { NavLink } from "react-router-dom";
import SearchBar from "./SearchBar";
import FilterSelect from "./FilterSelect";

function Header() {
    return (
        <header className="bg-black py-3 sticky-top">
            <div className="container d-flex justify-content-between align-items-center gap-3">
                <div className="d-flex align-items-center gap-4">
                    <h1 className="text-danger m-0">BoolFlix</h1>

                    <nav>
                        <NavLink to="/" className="nav-link text-white">
                            Home
                        </NavLink>

                        <NavLink to="/movies" className="nav-link text-white">
                            Film
                        </NavLink>

                        <NavLink to="/series" className="nav-link text-white">
                            Serie TV
                        </NavLink>
                    </nav>    
                </div>

                <div  className="d-flex gap-2">
                    <FilterSelect />
                    <SearchBar />
                </div>
            </div>
        </header>
    );
}

export default Header;