/**
 * Created by lilit on 2018-06-09.
 */
import {getUsers} from '../utils/api';
import {receiveUsers} from './users';

export function loadUsers (){
    return (dispatch) => {
        return getUsers().then(users => {
            dispatch(receiveUsers(users))
        })
    }
}

