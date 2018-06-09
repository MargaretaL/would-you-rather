import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import rootReducer from './reducers/users'; //rootreducer
import middleware from './middleware';
import {Provider} from 'react-redux';



const store = createStore(rootReducer, middleware);


ReactDOM.render(
    <Provider store={store}>
    <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
