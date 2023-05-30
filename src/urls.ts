import { API_KEY,IMAGE_URL } from './constants/constants';


export const trending = `/trending/all/day?api_key=${API_KEY}`
export const action = `/discover/movie?api_key=${API_KEY}&with_genres=28`
export const originals = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&with_genres=12`
export const romance = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`
export const horror = `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`