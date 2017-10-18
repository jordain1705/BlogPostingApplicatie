import _ from 'lodash'
import {FETCH_POSTS } from '../actions';
import {FETCH_POST } from '../actions';
import {DELETE_POST } from '../actions';
export default function (state = {}, action) {
  switch (action.type) {
    // remove the deleted post from you LOCAL state. for users with a slow connection
    case DELETE_POST:
    return _.omit(state,action.payload);


    // when the FETCH_POSTS action is invoced change the array to and object
    case FETCH_POST:

    // const post = action.payload.data;
    // const newState = {...state};
    // newState[post.id] = post;
    // return newState
    //
    return {...state, [action.payload.data.id]: action.payload.data};
    //..state = takes all the posts that we have fetched. and put them in the new object we are about to return







    case FETCH_POSTS:

      return _.mapKeys(action.payload.data, 'id');

    default:
      return state;
  }
}
