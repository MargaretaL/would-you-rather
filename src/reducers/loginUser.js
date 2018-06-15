/**
 * Created by lilit on 2018-06-10.
 */

import {SET_LOGGEDIN_USER} from '../actions/loginUser';
import {LOGOUT_USER} from '../actions/logoutUser';


export default function loggedinUser(state = {}, action) {
    switch (action.type) {
        case SET_LOGGEDIN_USER :
            return action.user;
        case LOGOUT_USER:
            return {};
        default :
            return state
    }
};

