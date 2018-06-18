/**
 * Created by lilit on 2018-06-09.
 */

import  {_getUsers,_getQuestions, _saveQuestionAnswer, _saveQuestion} from './_DATA';

export function getUsers () {
    return _getUsers();
}

export function getQuestions () {
    return _getQuestions();
}

export function saveQuestionAnswer (info) {
    return _saveQuestionAnswer(info);
}

export function saveQuestion (info) {
    return _saveQuestion(info);
}
