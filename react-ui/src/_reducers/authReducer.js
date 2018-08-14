import constants from '../_constants/constants';

let userStr = localStorage.getItem('user');
let user = JSON.parse(userStr);

const initialState = user ? { authenticated: true, ...user } : {};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case constants.AUTHENTICATED:
      return { ...state, authenticated: true, ...action.payload };
    case constants.UNAUTHENTICATED:
      return { ...state, authenticated: false };
    case constants.AUTHENTICATION_ERROR:
      return { ...state, error: action.payload };
    case constants.POSTS_RECEIVED:
      return { ...state, posts: action.payload };
    case constants.INCREMENT_POST_LIKES:
      let index = action.payload, posts = {...state.posts};
      (!posts.data[index].count) ? posts.data[index].count=1 : posts.data[index].count+=1;
      return { ...state, posts: posts};
    case constants.LOGGED_IN:
      return { ...state, ...action.payload };
    case constants.LOGOUT:
      return { ...state, authenticated: false };
    default:
      return state
  }
}

export default authReducer;