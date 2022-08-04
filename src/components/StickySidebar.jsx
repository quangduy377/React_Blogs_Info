import React from "react";
import blogs from "../data/blogs.json";
import "../css/sidebar.scss";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { SearchContext } from "../context/search-context";
const exampleFooter = [
  "Help",
  "Status",
  "Writers",
  "Blog",
  "Careers",
  "Privacy",
  "Terms",
  "About",
];
const tagArr = blogs.tags.map(tag=>{
    return {name:tag,activate:false}
  } 
)
function StickySidebar() {
  const searchCtx = useContext(SearchContext)
  const tags = searchCtx.tags
  // const [tagsState, setTagStates] = useState(tagArr)
  const onChangeTagState = (tagName) =>{
    const newTags = [...tags]
    const index = newTags.findIndex(tag=>tag===tagName)
    console.log('index = ',index)
    if(index>=0){
      newTags.splice(index,1)
    }
    else{
      newTags.push(tagName)
    }
    searchCtx.updateTags(newTags)
    // setTagStates(newTagsState)
  }

  // useEffect(()=>{
  //   // console.log('USEEFFECT: ',tagsState)
  //   const filteredTags = tagsState.filter(tagState=>tagState.activate===true)
  //   // console.log('filteredTags: ',filteredTags)
  //   const tags = filteredTags.map(tag=>tag.name)
  //   // console.log('tags: ',tags)
  //   onFilterTags(tags)
  // },[tags])

  return (
    <div className="sidebar">
      <p>discover more of what matters to you</p>
      <div className="tagWrapper">
        {blogs.tags.map((tag) => (
          <div className={`tag ${tags.includes(tag)?'active':''}`} key={tag} onClick={onChangeTagState.bind(null,tag)}>
            {tag}
          </div>
        ))}
      </div>
      <div className="tagWrapper">
        {exampleFooter.map((footer) => (
          <a href="/#" key={footer} style={{ color: "black" }}>
            {footer}
          </a>
        ))}
      </div>
    </div>
  );
}

export default StickySidebar;
