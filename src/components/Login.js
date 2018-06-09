/**
 * Created by lilit on 2018-06-09.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';

class Login extends Component {
    render() {
        return (
            <div className="tweet">
                {this.props.users.map(user => (
                        <div>
                            <ol>
                                <li>
                                    {user.name}
                                </li>
                            </ol>
                        </div>
                    )
                )}
            </div>
        )
    }
}

function mapStateToProps ({users}) {
    const keys = Object.keys(users || {}); // ['sarahedo', ...]//modifierar ej users objektet
    const usersArray = keys.map(key => users[key]);
    return {
        users: usersArray
    }
}

export default connect(mapStateToProps)(Login);