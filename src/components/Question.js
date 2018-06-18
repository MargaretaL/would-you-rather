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
                <h1>Would you rather?</h1>
                <img src={this.props.users[this.props.question.author].avatarURL} alt={this.props.users[this.props.question.author].name}/>
                <div><button disabled={!!this.props.answer} onClick={this.voteOptionOne}>{this.props.question.optionOne.text} </button>{this.props.answer === 'optionOne'?  'Your Answer': ''}{this.props.votesOne.length}, {100 * this.props.votesOne.length/this.props.nbrOfVotes} %</div>
                <div><button disabled={!!this.props.answer} onClick={this.voteOptionTwo}>{this.props.question.optionTwo.text}</button> {this.props.votesTwo.length}, {100 * this.props.votesTwo.length/this.props.nbrOfVotes} %</div>
            </div>
        );
    }
}


function mapStateToProps({questions, loggedinUser, users}, props) {
    const { id } = props.match.params;

    let question = questions[id];
    return {
        users,
        question: question,
        votesOne: question.optionOne.votes,
        votesTwo: question.optionTwo.votes,
        nbrOfVotes: question.optionOne.votes.length + question.optionTwo.votes.length,
        answer: users[loggedinUser].answers[question.id]
    }
}

export default connect(mapStateToProps)(Question);
