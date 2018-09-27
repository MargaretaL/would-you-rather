import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import {createStore} from 'redux';
import rootReducer from './reducers'; //rootreducer
import middleware from './middleware';
import {Provider} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';


const store = createStore(rootReducer, middleware);




ReactDOM.render(
    <Provider store={store}>
            <App/>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
