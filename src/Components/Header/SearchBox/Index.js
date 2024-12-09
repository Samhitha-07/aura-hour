
import { FaSearch } from "react-icons/fa";

const SearchBox=()=>{
    return(
        <div className="icon-btn search">
            <input type="text" placeholder="Search" />
            <FaSearch /> {/* Search Icon */}
            <span className="icon-text"></span>
        </div>
    )
}

export default SearchBox