export const endPoints={
    popular:"/movie/popular",
    top_rated:"/movie/top_rated",
    upcoming:"/movie/upcoming",
    ganresList:"/genre/movie/list",
    generaSearch: (param)=> `/discover/movie?${param}`,
    getSingle: (movieID)=> `/movie/${movieID}`,
    getVideo: (movieID)=> `/movie/${movieID}/videos`,
    getSingleSimilar: (movieID)=> `/movie/${movieID}/similar`,
    searchMovie: (query)=>`/search/movie?query=${query}`,
}