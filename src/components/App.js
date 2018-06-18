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
import LeaderBoard from './LeaderBoard';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {NavLink} from 'react-router-dom';


class App extends Component {
    componentDidMount() {
        this.props.dispatch(loadUsers());
        this.props.dispatch(loadQuestions());

    }


    handleLogoutUser = () => {
        this.props.dispatch(logoutUser());

    };

    render() {

        return (
            <div>
                {this.props.loggedinUser ?
                    <Router>
                        <div>
                            <button onClick={() => this.handleLogoutUser()}>
                                Logout
                            </button>
                            <Navbar color="faded" light>
                                <NavLink to="/" className="mr-auto">{this.props.loggedinUser.name}</NavLink>
                                <Nav navbar>
                                    <NavItem>
                                        <NavLink to="/add">
                                            Add new question
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink to="/leaderboard">
                                            leaderboard </NavLink>
                                    </NavItem>

                                </Nav>
                            </Navbar>
                            <Route path='/' exact component={Home}/>
                            <Route path='/question/:id' component={Question}/>
                            <Route path='/add' exact component={Add}/>
                            <Route path='/leaderboard' exact component={LeaderBoard}/>
                        </div>
                    </Router>
                    :
                    <Login/>
                }
            </div>

        );
    }
}

function mapStateToProps({loggedinUser, users}) {
    return {
        loggedinUser: users[loggedinUser]
    }
}

export default connect(mapStateToProps)(App);
//onClick={(event) => this.props.dispatch(logoutUser())}