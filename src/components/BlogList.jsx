import BlogPost from "./BlogPost";
import Pagination from "./Pagination";
import React from "react";
import blogs from "../data/blogs.json";
import { useState } from "react";
import { useEffect } from "react";

const PAGE_SIZES = [15, 25, 50, 100];

function BlogList() {
  const [curPageSize, setCurPageSize] = useState(PAGE_SIZES[0]) //default rows per page is 15
  const [currentPage, setCurPage] = useState(1) //default current page is 1  
  const currentPaginationData = blogs.posts.slice((currentPage-1)*curPageSize, curPageSize * currentPage);
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
        totalCount={blogs.posts.length}
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
          />
        ))}
      </ul>
    </div>
  );
}

export default BlogList;
