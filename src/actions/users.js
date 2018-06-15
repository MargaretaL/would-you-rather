/**
 * Created by lilit on 2018-06-09.
 */

export const RECEIVE_USERS = 'RECEIVE_USERS';

export function receiveUsers (users) {
    return {
        type: RECEIVE_USERS,
        users
    }
}
