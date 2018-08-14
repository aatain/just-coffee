import constants from '../_constants/constants';
import axios from 'axios';

export const updateUserInfo = (FBresponse) => {
    return async (dispatch) => {
        let userInfo = await axios.get('/api/getUserData', {
            params: {
                userToken: FBresponse.authResponse.accessToken,
                userID: FBresponse.authResponse.userID
            }
        })
        dispatch({ type: constants.AUTHENTICATED, payload: userInfo.data });
        localStorage.setItem('user', JSON.stringify(userInfo.data));
    };
};

export const logoutUser = () => {
    window.FB.getLoginStatus(response => {
        if (response && response.status === 'connected') {
            window.FB.logout();
        }
    });
    localStorage.clear();
    return { type: constants.LOGOUT };
};

export const getUserFeed = (userToken) => {
    return async (dispatch) => {
        let userFeed = await axios.get('/api/getUserFeed', {
            params: {
                userToken
            }
        })
        dispatch({ type: constants.POSTS_RECEIVED, payload: userFeed.data });
    };
};

export const incrementPostLikes = (index) => {
    return { type: constants.INCREMENT_POST_LIKES, payload: index };
};