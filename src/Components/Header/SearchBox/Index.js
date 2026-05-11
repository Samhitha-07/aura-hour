import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const SearchBox = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === "Enter" && query.trim() !== "") {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
      setQuery(""); // Clear input after navigating
    }
  };

  const handleSearchClick = () => {
    if (query.trim() !== "") {
      navigate(`/search?q=${encodeURIComponent(query.trim())}`);
      setQuery("");
    }
  };

  return (
    <div className="icon-btn search">
      <input
        type="text"
        placeholder="Search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleSearch}
      />
      <FiSearch onClick={handleSearchClick} style={{ cursor: "pointer", pointerEvents: "auto" }} />
      <span className="icon-text"></span>
    </div>
  );
};

export default SearchBox;