/**
 * Created by lilit on 2018-06-09.
 */
import React, {Component} from 'react';
import '../App.css';
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom'


class App extends Component {
    state = {
        showAnswered: false
    };

    setShowAnswered(show) {
        this.setState({
            showAnswered: show
        })
    };

    render() {
        return (
            <div>
                <h1>Would you rather?</h1>
                <button onClick={() => this.setShowAnswered(true)}>Answered</button>
                <button onClick={() => this.setShowAnswered(false)}>Unanswered</button>
                {
                    (this.state.showAnswered ? this.props.answeredQuestions : this.props.unansweredQuestions)
                        .map(question => (
                            <NavLink to={`/question/${question.id}`} className="tweet" key={question.id}>{question.author}
                                <div>{question.optionOne.text}</div>
                                <div>{question.optionTwo.text}</div>
                                <div>{question.timestamp}</div>
                            </NavLink>
                        ))
                }
            </div>
        );
    }
}


function mapStateToProps({questions, loggedinUser}) {
    const questionArray = Object.values(questions);
    const answeredQuestions = questionArray.filter(question => question.optionOne.votes.includes(loggedinUser.id) || question.optionOne.votes.includes(loggedinUser.id));
    const unansweredQuestions = questionArray.filter(question => !answeredQuestions.includes(question));
    return {
        answeredQuestions: answeredQuestions.sort((question1,question2) => question2.timestamp - question1.timestamp),
        unansweredQuestions: unansweredQuestions.sort((question1,question2) => question2.timestamp - question1.timestamp)
    }
}

export default connect(mapStateToProps)(App);