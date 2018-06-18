/**
 * Created by lilit on 2018-06-12.
 */

import {saveQuestion} from '../utils/api';
import {loadUsers} from './shared';


export const SAVE_QUESTION = 'SAVE_QUESTION';

function addQuestion (question) {
    return {
        type: SAVE_QUESTION,
        question
    }
}



export function handleSaveQuestion (optionOne, optionTwo) {
    return (dispatch, getState) => {
        const { loggedinUser } = getState();

        let question = {
            optionOneText:optionOne,
            optionTwoText:optionTwo,
            author: loggedinUser
        };

        return saveQuestion(question)
            .then((question) => dispatch(addQuestion(question)))
            .then(()=> dispatch(loadUsers()))
    }
}

