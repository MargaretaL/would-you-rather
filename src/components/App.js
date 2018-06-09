import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../App.css';
import {loadUsers} from '../actions/shared'
import Login from './Login';

class App extends Component {
    componentDidMount() {
        this.props.dispatch(loadUsers());
    }

    render() {
        return (
            <div>
                <Login/>
            </div>
        );
    }
}

export default connect()(App);