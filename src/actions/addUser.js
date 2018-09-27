/**
 * Created by lilit on 2018-06-18.
 */

import {saveUser} from '../utils/api';


export const SAVE_USER = 'SAVE_USER';

function addUser (user) {
    console.log(user);
    return {
        type: SAVE_USER,
        user
    }
}

export function handleSaveUser (user) {
    console.log(user);
    return (dispatch) => {

        return saveUser({user})
            .then(console.log(user))
            .then((user) => dispatch(addUser(user)))
    }
}