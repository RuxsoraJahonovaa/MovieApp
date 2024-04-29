const imageW300 = (path)=> `https://image.tmdb.org/t/p/w300/${path}`;
const imageW500 = (path)=> `https://image.tmdb.org/t/p/w500/${path}`;
const image = (path, width)=> `https://image.tmdb.org/t/p/w${width}/${path}`

export {imageW300,imageW500, image}