/**
 * Created by lilit on 2018-06-16.
 */

import {saveQuestionAnswer} from '../utils/api';
import {loadUsers, loadQuestions} from './shared';




export function handleSaveAnswer (answer, questionId) {
    return (dispatch, getState) => {
        const { loggedinUser } = getState();

        let info = {
            answer,
            qid:questionId,
            authedUser: loggedinUser
        };

        return saveQuestionAnswer(info)
            .then(()=> dispatch(loadUsers()))
            .then(()=> dispatch(loadQuestions()))
    }
}