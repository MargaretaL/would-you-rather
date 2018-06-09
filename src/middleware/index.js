/**
 * Created by lilit on 2018-06-09.
 */
import thunk from 'redux-thunk';
import {applyMiddleware} from 'redux';

export default applyMiddleware(
    thunk
)