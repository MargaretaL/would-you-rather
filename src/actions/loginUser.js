/**
 * Created by lilit on 2018-06-10.
 */

export const SET_LOGGEDIN_USER = 'SET_LOGGEDIN_USER';

export function setLoggedinUser (userId) {
    return {
        type: SET_LOGGEDIN_USER,
        userId,
    }
}



