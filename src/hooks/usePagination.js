export const DOTS = "...";


function usePagination({
  currentPage,
  totalCount,
  pageSize
}) {
  const totalPage = Math.ceil(totalCount / pageSize)
  let paginationRange = []
  if(totalPage===3){
    paginationRange = [1,2,3]
  }
  else if(totalPage===2){
    paginationRange = [1,2]
  }
  else if(totalPage === 1){
    paginationRange = [1]
  }
  else if(totalPage > 3){
    //totalPage = 6
    //currentPage: 1, 2, 3, 4, 5, 6
    if(currentPage===1 || currentPage ===2){
      paginationRange = [1,2,3,DOTS,totalPage]
    }
    else if(currentPage===totalPage){
      paginationRange = [1,DOTS,totalPage-2, totalPage-1, totalPage]
    }
    else{
      if(currentPage+1 === totalPage){
        paginationRange = [1,DOTS,currentPage-1,currentPage,currentPage+1]
      }
      if(currentPage+1 < totalPage){
        paginationRange = [1,DOTS,currentPage-1,currentPage,currentPage+1,DOTS,totalPage]
      }
    }
  }
  return paginationRange;
}

export default usePagination;