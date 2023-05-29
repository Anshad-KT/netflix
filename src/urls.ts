import { API_KEY,IMAGE_URL } from './constants/constants';


export const trending = `/trending/all/week?api_key=${API_KEY}&language=en-US`
export const action = `/discover/movie?api_key=${API_KEY}&with_genres=28`
export const originals = `https://api.themoviedb.org/3/discover/tv?api_key=${API_KEY}&with_networks=213`
