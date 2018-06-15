/**
 * Created by lilit on 2018-06-10.
 */
import { combineReducers } from 'redux'
import loggedinUser from './loginUser';
import users from './users';
import questions from './questions';


export default combineReducers({
    loggedinUser,
    users,
    questions,

})

