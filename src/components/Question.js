/**
 * Created by lilit on 2018-06-09.
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';


class Question extends Component {

    render() {
        return (
            <div>
                <h1>Would you rather?</h1>
                <img src={this.props.users[this.props.question.author].avatarURL} alt={this.props.users[this.props.question.author].name}/>
                <div>{this.props.question.optionOne.text}, {this.props.votesOne.length}, {100 * this.props.votesOne.length/this.props.nbrOfVotes} %</div>
                <div>{this.props.question.optionTwo.text}, {this.props.votesTwo.length}, {100 * this.props.votesTwo.length/this.props.nbrOfVotes} %</div>
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
        nbrOfVotes: question.optionOne.votes.length + question.optionTwo.votes.length
    }
}

export default connect(mapStateToProps)(Question);