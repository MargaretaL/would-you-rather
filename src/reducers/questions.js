/**
 * Created by lilit on 2018-06-10.
 */
import {RECEIVE_QUESTIONS} from '../actions/questions';
import {SAVE_QUESTION} from '../actions/add';


export default function questions(state = {}, action) {
    let newState;
    switch (action.type) {
        case RECEIVE_QUESTIONS :
             newState = {
                ...state,
                ...action.questions
            };
            return newState;
        case SAVE_QUESTION:
            newState = {
                ...state
            };

            newState[action.question.id] = action.question;

            return newState;
        default :
            return state
    }
}

