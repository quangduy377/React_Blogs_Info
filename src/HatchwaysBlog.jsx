import React from "react";
import { useState } from "react";
import BlogList from "./components/BlogList";
import StyledNavbar from "./components/Navbar";
import StickySidebar from "./components/StickySidebar";

import { SearchContext } from "./context/search-context";
import blogs from "../src/data/blogs.json"
function HatchwaysBlog() {
  const [tags, setTags] = useState([])
  const [keyword, setKeyWord] = useState(null)
  const [postsList, setPostsList] = useState(blogs.posts)

  const isIncluded = (postTags, filteredTags) => {
   
    for(const tag of filteredTags){
      if (!postTags.includes(tag)) {
        return false
      }
    }
    return true
  }

  const onUpdatePostList = (keyword, tags) => {
    let postList = []
    if (keyword == null) {
      for (const post of blogs.posts) {
        if (isIncluded(post['tags'], tags)) {
          postList.push(post)
        }
      }
    }
    else if (tags == null) {
      for (const post of blogs.posts) {
        for (const key in post) {
          if (key !== 'id' && key !== 'readingTimeMinutes' && key !== 'tags') {
            // console.log(post[key])
            if (post[key].includes(keyword)) {
              postList.push(post)
              break
            }
          }
        }
      }
    }
    else {
      for (const post of blogs.posts) {
        for (const key in post) {
          //there are tags to filter out
          if(!isIncluded(post['tags'], tags)){
            break
          }
          if (key === 'id' || key === 'readingTimeMinutes') {
            continue
          }
          if (post[key].includes(keyword)) {
            postList.push(post)
            break
          }
        }
      }
    }
    setPostsList(postList)
  }
  const onUpdateTags = (tags) => {
    setTags(tags)
  }
  const onUpdateKeyword = (keyword) =>{
    setKeyWord(keyword)
  }

  return (
    <div style={{ margin: "0 auto", width: "100%", padding: 20 }}>
      <SearchContext.Provider value={
        { 
          tags: tags, 
          keyword: keyword, 
          postList: postsList, 
          updateList: onUpdatePostList, 
          updateTags: onUpdateTags,
          updateKeyword: onUpdateKeyword
        }
        }>
        <StyledNavbar />
        <div style={{ marginTop: 60, display: "flex" }}>
          <BlogList
          //tags =  {tags}
          />
          <StickySidebar />
        </div>
      </SearchContext.Provider>
    </div>
  );
}

// onFilterTags = {onFilterTags}

export default HatchwaysBlog;
