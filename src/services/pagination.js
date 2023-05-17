const getLastIndex = (currentPage, dataPerPage) => currentPage * dataPerPage

const getStartIndex = (lastIndex, dataPerPage) => lastIndex - dataPerPage

export const getData = (users, currentPage, dataPerPage) => {
  const lastIndex = getLastIndex(currentPage, dataPerPage)
  const startIndex = getStartIndex(lastIndex, dataPerPage)
  return users.slice(startIndex, lastIndex)
}

export const getStartPage = (currentPage, dataPerPage) =>
  Math.floor((currentPage - 1) / dataPerPage) * dataPerPage + 1

export const getLastPage = (currentPage, dataPerPage) =>
  Math.ceil(currentPage / dataPerPage) * dataPerPage + 1
