import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../App.css';
import {loadUsers, loadQuestions} from '../actions/shared'
import Login from './Login';
import {Navbar, Nav, NavItem} from 'reactstrap';
import {logoutUser} from '../actions/logoutUser';
import Home from './Home';
import Add from './Add';
import Question from './Question';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {NavLink} from 'react-router-dom';



class App extends Component {
    componentDidMount() {
        this.props.dispatch(loadUsers());
        this.props.dispatch(loadQuestions());

    }

    render() {
        return (
            <Router>
                {this.props.loggedinUser.name ?
                <div>
                    <Navbar color="faded" light>
                        <NavLink to="/" className="mr-auto">{this.props.loggedinUser.name}</NavLink>
                        <Nav navbar>
                            <NavItem>
                                <NavLink to="/add" >
                                    Add new question
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <button onClick={(event) => this.props.dispatch(logoutUser())} >
                                    Logout
                                </button>
                            </NavItem>
                        </Nav>
                    </Navbar>
                    <Route path='/' exact component={Home} />
                    <Route path='/question/:id' component={Question} />
                    <Route path='/add' component={Add} />

                </div>
                :
                <Login/>
            }
            </Router>
        );
    }
}

function mapStateToProps({loggedinUser}) {
    return {
        loggedinUser,
    }
}

export default connect(mapStateToProps)(App);