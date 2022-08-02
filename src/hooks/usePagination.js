export const DOTS = "...";

function usePagination({
  currentPage,
  totalCount,
  pageSize
}) {

  /*
    Modify the range of pagination to display the available page number on screen
  */
  const totalPage = Math.ceil(totalCount / pageSize)
  let paginationRange = []

  if (currentPage === 1 && currentPage + 2 <= totalPage) {
    if(currentPage+1 !== totalPage) {
      paginationRange = [1, 2, 3, DOTS, totalPage]
    }
  }
  if (currentPage > 1 && currentPage < totalPage) {
    if(currentPage - 1 !== 1 ){
      paginationRange = [1, DOTS, currentPage, currentPage + 1, totalPage]
    }
    if(currentPage + 1 !== totalPage && currentPage !== 2){
      paginationRange = [1, DOTS, currentPage, DOTS, totalPage]
    }
    if(currentPage === 2) {
      paginationRange = [1, currentPage, currentPage+1, DOTS, totalPage]
    }
  }
  if (currentPage + 1 === totalPage) {
    if(currentPage - 1 !== 1){
      paginationRange = [1, DOTS, currentPage - 1, currentPage, totalPage]
    }
  }
  if(currentPage === totalPage){
    if(currentPage - 1 !==1){
      paginationRange = [1, DOTS, currentPage - 2, currentPage-1, currentPage]
    }
  }
  if (totalPage === 1) {
    paginationRange = [1]
  }
  return paginationRange;
}

export default usePagination;