/**
 * Created by lilit on 2018-06-13.
 */

import React, {Component} from 'react';
import '../App.css';
import {connect} from 'react-redux';


class LeaderBoard extends Component {
    render() {
        return (
            <div>
                <div className="center">
                    <h2>LeaderBoard</h2>
                </div>

                {this.props.users.map(user => (

                    <div className="question text-muted">
                        <div className="center">
                            <img className="avatar" src={user.avatarURL} alt=""/>
                            <figcaption>{user.name}</figcaption>
                        </div>
                        <div className="textarea">
                            <h5>Questions asked: {user.questions.length}</h5>
                            <h5>Questions answered: {Object.keys(user.answers).length}</h5>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}

function mapStateToProps({users}) {
    const usersArray = Object.values(users);

    return {
        users: usersArray.sort((user1, user2) =>
            (user2.questions.length + Object.keys(user2.answers).length) - (user1.questions.length + Object.keys(user1.answers).length)
        )
    }
}


export default connect(mapStateToProps)(LeaderBoard);
