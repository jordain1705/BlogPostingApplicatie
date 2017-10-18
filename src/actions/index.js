import axios from 'axios';
export const FETCH_POSTS = 'fetch_posts'


const ROOT_URL = 'http://reduxblog.herokuapp.com/api'
const API_KEY = '?key=alguleuk'


export function fetchPosts(){

  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

  // remember Middleware resolves this for us. so we can get an array of posts

  return{
    type: FETCH_POSTS,
    payload: request
  }
}
