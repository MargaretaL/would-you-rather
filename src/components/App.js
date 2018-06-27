import React, {Component} from 'react';
import {connect} from 'react-redux';
import '../index.css';
import '../App.css';
import {loadUsers, loadQuestions} from '../actions/shared'
import Login from './Login';
import {Navbar, Nav, NavItem, NavbarBrand} from 'reactstrap';
import {logoutUser} from '../actions/logoutUser';
import Home from './Home';
import Add from './Add';
import AddUser from './AddUser';

import Question from './Question';
import LeaderBoard from './LeaderBoard';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import {NavLink} from 'react-router-dom';

const pageStyle = {
  marginBottom: '50px'
};

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
                            <Navbar color="faded" light className="text-muted bg-dark" style={pageStyle}>
                                <Nav>
                                    <NavItem>
                                        <NavLink className="navLinks" to="/">
                                            Home
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="navLinks" to="/add">
                                            Add New Question
                                        </NavLink>
                                    </NavItem>
                                    <NavItem>
                                        <NavLink className="navLinks" to="/leaderboard">
                                            leaderboard </NavLink>
                                    </NavItem>
                                </Nav>
                                <NavItem>
                                    <figcaptioon>{this.props.loggedinUser.name}</figcaptioon>
                                    <img className="avatar" src={this.props.loggedinUser.avatarURL} alt=""/>
                                    <button className=" btn logoutButton ml-lg-5"
                                            onClick={() => this.handleLogoutUser()}>
                                        Logout
                                    </button>
                                </NavItem>
                            </Navbar>
                            <Route path='/' exact component={Home}/>
                            <Route path='/question/:id' component={Question}/>
                            <Route path='/add' exact component={Add}/>
                            <Route path='/leaderboard' exact component={LeaderBoard}/>
                        </div>
                    </Router>
                    : <div>
                        <div className='center'>
                            <h1>Welcome!</h1>
                            <h3>Please Login</h3>
                        </div>
                        <div>
                            <Login/>
                            <div className="center">
                                <h5>Or</h5>
                            </div>
                            <div className="question">
                                <AddUser/>
                            </div>
                        </div>
                    </div>
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
