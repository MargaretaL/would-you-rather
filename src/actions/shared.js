/**
 * Created by lilit on 2018-06-09.
 */
import {getUsers, getQuestions, saveQuestion} from '../utils/api';
import {receiveUsers} from './users';
import {receiveQuestions} from './questions';
import {saveQuestionAnswers} from './add';


export function loadUsers() {
    return (dispatch) => {
        return getUsers()
            .then((users) => {
                dispatch(receiveUsers(users))
            })
    }
}

export function loadQuestions() {
    return (dispatch) => {
        return getQuestions()
            .then((questions) => {
                dispatch(receiveQuestions(questions))
            })
    }
}
