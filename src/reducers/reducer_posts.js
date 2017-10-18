
import _ from 'lodash'
import {FETCH_POSTS} from '../actions'

export default function (state = {}, action) {
  switch (action.type) {
      // when the FETCH_POSTS action is invoced change the array to and object
    case FETCH_POSTS:

      return _.mapKeys(action.payload.data, 'id');

    default:
      return state;
  }
}
