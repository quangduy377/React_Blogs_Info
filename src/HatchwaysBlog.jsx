import React from "react";
import { useState } from "react";
import BlogList from "./components/BlogList";
import StyledNavbar from "./components/Navbar";
import StickySidebar from "./components/StickySidebar";

import { SearchContext } from "./context/search-context";
import blogs from "../src/data/blogs.json"
function HatchwaysBlog() {
  const [tagsState, setTagsState] = useState([])
  const [postsList, setPostsList] = useState(blogs.posts)
  // const onFilterTags = (filteredTags) =>{
  //   setTags(filteredTags)
  // }
  // let postList=blogs.posts
  const onUpdatePostList = (keyword) =>{
    let postList = [] 
    for(const post of blogs.posts){
      for(const key in post){
        if(key!=='id'){
          if(key.includes(keyword)){
            postList.push(post)
            break
          }
        }
      }
    }
    setPostsList(postList)
  }
  const onUpdateTags = (tagsState) =>{
    setTagsState(tagsState)
  }

  return (
    <div style={{ margin: "0 auto", width: "100%", padding: 20 }}>
      <SearchContext.Provider value={{tagsState: tagsState, postList: postsList, updateList: onUpdatePostList, updateTags: onUpdateTags }}>
        <StyledNavbar />
        <div style={{ marginTop: 60, display: "flex" }}>
          <BlogList 
            //tags =  {tags}
          />
          <StickySidebar/>
        </div>
      </SearchContext.Provider>
    </div>
  );
}

// onFilterTags = {onFilterTags}

export default HatchwaysBlog;
