import { useContext } from "react";
import { createContext } from "react";
export const SearchContext = createContext({
    tags: [],
    keyword: '',
    postList: [], 
    updateList : (keyword,tags) =>{},
    updateTags: (tags) =>{},
    updateKeyword: (keyword) =>{}
})