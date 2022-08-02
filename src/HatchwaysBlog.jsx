import React from "react";
import { useState } from "react";
import BlogList from "./components/BlogList";
import StyledNavbar from "./components/Navbar";
import StickySidebar from "./components/StickySidebar";

function HatchwaysBlog() {
  const [tags, setTags] = useState([])
  const onFilterTags = (filteredTags) =>{
    setTags(filteredTags)
  }
  return (
    <div style={{ margin: "0 auto", width: "100%", padding: 20 }}>
      <StyledNavbar />
      <div style={{ marginTop: 60, display: "flex" }}>
        <BlogList 
          tags =  {tags}
        />
        <StickySidebar onFilterTags = {onFilterTags}/>
      </div>
    </div>
  );
}

export default HatchwaysBlog;
