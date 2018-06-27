/**
 * Created by lilit on 2018-06-09.
 */
import React, {Component} from 'react';
import '../App.css';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom'


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
                <div className="center">
                    <h2>Would you rather?</h2>
                    <button className="btn btn-outline-success voteButton" onClick={() => this.setShowAnswered(true)}>
                        Answered
                    </button>
                    <button className="btn btn-outline-secondary voteButton"
                            onClick={() => this.setShowAnswered(false)}>Unanswered
                    </button>
                </div>
                {
                    (this.state.showAnswered ? this.props.answeredQuestions : this.props.unansweredQuestions)
                        .map(question => (
                            <div className="question text-black-50">
                                <NavLink className="links" to={`/question/${question.id}`} key={question.id}>
                                    <h4>{question.author}</h4>
                                    <div className="textarea">
                                        <div className=" text-muted links">{question.optionOne.text}</div>
                                        <div className=" text-muted links">{question.optionTwo.text}</div>
                                    </div>

                                </NavLink>
                            </div>

                        ))
                }
            </div>
        );
    }
}


function mapStateToProps({questions, loggedinUser, users}) {
    const questionArray = Object.values(questions);
    const answeredQuestions = questionArray.filter(question => question.optionOne.votes.includes(loggedinUser) || question.optionTwo.votes.includes(loggedinUser));
    const unansweredQuestions = questionArray.filter(question => !answeredQuestions.includes(question));



    return {
        answeredQuestions: answeredQuestions.sort((question1, question2) => question2.timestamp - question1.timestamp),
        unansweredQuestions: unansweredQuestions.sort((question1, question2) => question2.timestamp - question1.timestamp),
        users
    }
}

export default connect(mapStateToProps)(App);
