import BlogPost from "./BlogPost";
import Pagination from "./Pagination";
import React from "react";
import blogs from "../data/blogs.json";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { SearchContext } from "../context/search-context";

const PAGE_SIZES = [15, 25, 50, 100];

const containTags = (filteredTags, existedTags) => {
  //existedTags must contain or equal to filteredTags
  for (let i = 0; i < filteredTags.length; i++) {
    if (!existedTags.includes(filteredTags[i])) {
      return false
    }
  }
  return true
}

function BlogList() {
  const searchCtx = useContext(SearchContext)
  const tags = searchCtx.tags
  
  const [curPageSize, setCurPageSize] = useState(PAGE_SIZES[0]) //default rows per page is 15
  const [currentPage, setCurPage] = useState(1) //default current page is 1  
  let filteredPost = []
  if (tags.length !== 0) {
    for (let i = 0; i < blogs.posts.length; i++) {
      if (containTags(tags, blogs.posts[i].tags)) {
        filteredPost.push(blogs.posts[i])
      }
    }
  }
  else{
    filteredPost = blogs.posts
  }
  const currentPaginationData = filteredPost.slice((currentPage - 1) * curPageSize, curPageSize * currentPage);
  useEffect(()=>{
    //reset to the first page if filtered tags changed
    setCurPage(1)
  },[tags])
  const updateRowsPerPage = (rows) => {
    setCurPageSize(+rows)
    setCurPage(1)
  };
  const updatePage = (curPage) => {
    setCurPage(curPage)
  };
  return (
    <div>
      <Pagination
        currentPage={currentPage}
        totalCount={filteredPost.length} //blogs.posts.length
        pageSize={curPageSize}
        pageSizeOptions={PAGE_SIZES}
        onPageChange={updatePage}
        onPageSizeOptionChange={updateRowsPerPage}
      />
      <ul
        // Do not remove the aria-label below, it is used for Hatchways automation.
        aria-label="blog list"
      >
        {currentPaginationData.map((blog) => (
          <BlogPost
            key={blog.id}
            author={blog.author}
            title={blog.title}
            excerpt={blog.excerpt}
            featureImage={blog.image}
            tags = {blog.tags.toString()}
          />
        ))}
      </ul>
    </div>
  );
}

export default BlogList;
