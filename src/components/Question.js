/**
 * Created by lilit on 2018-06-09.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {handleSaveAnswer} from '../actions/vote';


class Question extends Component {

    voteOptionOne = () => {
        this.props.dispatch(handleSaveAnswer('optionOne', this.props.question.id))
    };

    voteOptionTwo = () => {
        this.props.dispatch(handleSaveAnswer('optionTwo', this.props.question.id))
    };
    render() {
        return (
            <div>
                {this.props.question ?
                    <div className="question">
                        <div className="center">
                            <img className="avatar" src={this.props.users[this.props.question.author].avatarURL}
                                 alt={this.props.users[this.props.question.author].name}/>
                            <h4>{this.props.users[this.props.question.author].name}</h4>
                            <h2>Would you rather?</h2>
                        </div>
                        <div className="textarea">
                            <div>
                                <button className="btn btn-outline-success voteButtonS"
                                        disabled={!!this.props.answer}
                                        onClick={this.voteOptionOne}>{this.props.question.optionOne.text} </button>
                                {this.props.answer === 'optionOne' ? 'Your Answer: ' : ''}{this.props.votesOne.length}, {100 * this.props.votesOne.length / this.props.nbrOfVotes}
                                %
                            </div>
                            <div>
                                <button className="btn btn-outline-success voteButtonS"
                                        disabled={!!this.props.answer}
                                        onClick={this.voteOptionTwo}>{this.props.question.optionTwo.text}</button>
                                {this.props.answer === 'optionTwo' ? 'Your Answer: ' : ''}{this.props.votesTwo.length}, {100 * this.props.votesTwo.length / this.props.nbrOfVotes}
                                %
                            </div>
                        </div>
                    </div> :
                    <div className="center">
                        <h2>404</h2>
                        <h3> The question you are looking for is not found.</h3>
                    </div>
                }
            </div>
        )
    }
}


function mapStateToProps({questions, loggedinUser, users}, props) {
    const {id} = props.match.params;

    let question = questions[id];
    if (!question) {
        return {users};
    }
    return {
        users,
        question: question,
        votesOne: question.optionOne.votes,
        votesTwo: question.optionTwo.votes,
        nbrOfVotes: question.optionOne.votes.length + question.optionTwo.votes.length,
        answer: users[loggedinUser].answers[question.id],

    }

}


export default connect(mapStateToProps)(Question);
