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

export function saveQuestionAnswer () {
    return _saveQuestionAnswer();
}

export function saveQuestion (info) {
    return _saveQuestion(info);
}
