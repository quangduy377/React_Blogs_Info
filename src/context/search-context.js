import { useContext } from "react";
import { createContext } from "react";
export const SearchContext = createContext({
    tagsState: [],
    postList: [], 
    updateList : (keyword) =>{},
    updateTags: (tags) =>{}
})