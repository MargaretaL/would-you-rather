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
                <h2>LeaderBoard</h2>
                <h4>Users</h4>
                {this.props.users.map(user => (


                    <div className="tweet">
                        {user.name}
                        {user.questions.length}
                        {user.answers.length}
                        {Object.keys(user.answers).length
                        }
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
            (user2.questions.length + Object.keys(user2.answers).length)-(user1.questions.length + Object.keys(user1.answers).length)
        )
    }
}

export default connect(mapStateToProps)(LeaderBoard);
