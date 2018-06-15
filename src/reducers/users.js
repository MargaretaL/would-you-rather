/**
 * Created by lilit on 2018-06-09.
 */
import {RECEIVE_USERS} from '../actions/users';

export default function users (state= {}, action ) {
    switch (action.type) {
        case RECEIVE_USERS :
            let newState = {
                ...state, //empty object to begin with
                ...action.users// all users grabbed from the action
            };
            return newState;
        default :
            return state
    }
}

