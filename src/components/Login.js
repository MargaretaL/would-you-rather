/**
 * Created by lilit on 2018-06-09.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setLoggedinUser} from '../actions/loginUser'


const loginStyle = {
    cursor: 'pointer'
};
class Login extends Component {

    render() {
        return (
            <div>
                {this.props.users.map(user => (
                        <div style={loginStyle} className="tweet" onClick={(event) => this.props.dispatch(setLoggedinUser(user.id))}
                             key={user.id}>
                            <img className="avatar" src={user.avatarURL} alt=""/>
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
