
import { FiSearch } from "react-icons/fi";

const SearchBox=()=>{
    return(
        <div className="icon-btn search">
            <input type="text" placeholder="Search" />
            <FiSearch /> {/* Search Icon */}
            <span className="icon-text"></span>
        </div>
    )
}

export default SearchBox