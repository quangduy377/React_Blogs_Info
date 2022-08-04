import { SearchIcon } from "@heroicons/react/outline";
import React from "react";
import "../css/navbar.scss";
import { SearchContext } from "../context/search-context";
import { useContext } from "react";
function SearchInput() {
  const searchCtx = useContext(SearchContext)
  return (
    <div style={{ display: "flex" }}>
      <SearchIcon className="icon" />
      <input className="input" placeholder="Search..." onChange={(event)=>
        {
          searchCtx.updateList(event.target.value, null)
          searchCtx.updateKeyword(event.target.value)
        }
        }/>
    </div>
  );
}

export default SearchInput;
