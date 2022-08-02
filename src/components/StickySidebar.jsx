import React from "react";
import blogs from "../data/blogs.json";
import "../css/sidebar.scss";
import { useState } from "react";
import { useEffect } from "react";

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
function StickySidebar({onFilterTags}) {
  const [tagsState, setTagStates] = useState(tagArr)
  // console.log(tagsState)

  const onChangeTagState = (tagName) =>{
    console.log('chnage state')
    const newTagsState = [...tagsState]
    const index = newTagsState.findIndex(tag=>tag.name===tagName)
    newTagsState[index].activate = !newTagsState[index].activate
    setTagStates(newTagsState)
  }

  useEffect(()=>{
    // console.log('USEEFFECT: ',tagsState)
    const filteredTags = tagsState.filter(tagState=>tagState.activate===true)
    // console.log('filteredTags: ',filteredTags)
    const tags = filteredTags.map(tag=>tag.name)
    // console.log('tags: ',tags)
    onFilterTags(tags)
  },[tagsState])

  return (
    <div className="sidebar">
      <p>discover more of what matters to you</p>
      <div className="tagWrapper">
        {tagsState.map((tag) => (
          <div className={`tag ${tag.activate?'active':''}`} key={tag.name} onClick={onChangeTagState.bind(null,tag.name)}>
            {tag.name}
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
