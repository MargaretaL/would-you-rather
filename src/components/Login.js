/**
 * Created by lilit on 2018-06-09.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setLoggedinUser} from '../actions/loginUser'

class Login extends Component {

    render() {
        return (
            <div>
                <h3>Log In</h3>
                {this.props.users.map(user => (
                        <div className="tweet" onClick={(event) => this.props.dispatch(setLoggedinUser(user.id))} key={user.id}>

                                    {user.name}
                        </div>
                    )
                )}
            </div>
        )
    }
}


function mapStateToProps({users}) {
    const keys = Object.keys(users || {}); // ['sarahedo', ...]//modifierar ej users objektet
    const usersArray = keys.map(key => users[key]);
    return {
        users: usersArray
    }
}
export default connect(mapStateToProps)(Login);
