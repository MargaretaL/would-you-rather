/**
 * Created by lilit on 2018-06-13.
 */

import React from 'react';
import '../App.css';
import {connect} from 'react-redux';


const LeaderBoard = ({users})=>(
            <div>
                <div className="center">
                    <h2>LeaderBoard</h2>
                </div>

                {users.map(({id, avatarURL, name, questions, answers}) => (
                    <div className="question text-muted carousel-fade" key={id}>
                        <div className="center">
                            <img className="avatar" src={avatarURL} alt=""/>
                            <figcaption>{name}</figcaption>
                        </div>
                        <div className="textarea">
                            <h5>Questions asked: {questions.length}</h5>
                            <h5>Questions answered: {Object.keys(answers).length}</h5>
                        </div>
                    </div>
                ))}0

            </div>
    );



function mapStateToProps({users}) {
    const usersArray = Object.values(users);

    return {
        users: usersArray.sort((user1, user2) =>
            (user2.questions.length + Object.keys(user2.answers).length) - (user1.questions.length + Object.keys(user1.answers).length)
        )
    }
}


export default connect(mapStateToProps)(LeaderBoard);
