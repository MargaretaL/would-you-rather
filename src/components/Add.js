/**
 * Created by lilit on 2018-06-12.
 */

import React, {Component} from 'react'
import {connect} from 'react-redux'
import {handleSaveQuestion} from '../actions/add'
import {Redirect} from 'react-router-dom'

class Add extends Component {
    state = {
        optionOne: '',
        optionTwo: '',
        toHome: false,
    };
    handleOptionOneChange = (e) => {
        const optionOne = e.target.value;

        this.setState(() => ({
            optionOne
        }))
    };
    handleOptionTwoChange = (e) => {
        const optionTwo = e.target.value;

        this.setState(() => ({
            optionTwo
        }))
    };
    handleSubmit = (e) => {
        e.preventDefault();

        const { optionOne, optionTwo } = this.state;
        const { dispatch } = this.props;

        dispatch(handleSaveQuestion(optionOne, optionTwo));

        this.setState(() => ({
            optionOne: '',
            optionTwo: '',
            toHome: true,
        }))
    };
    render() {
        const { optionOne, optionTwo, toHome } = this.state;

        if (toHome === true) {
            return <Redirect to='/' />
        }
        return (
            <div>
                <h3 className='center'>Add new Question</h3>
                <form className='new-tweet' onSubmit={this.handleSubmit}>
                    <input
                        placeholder="Option One"
                        value={optionOne}
                        onChange={this.handleOptionOneChange}
                    />
                    <input
                        placeholder="Option Two"
                        value={optionTwo}
                        onChange={this.handleOptionTwoChange}
                    />
                    <button
                        className='btn'
                        type='submit'
                        disabled={optionOne === ''}>
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}
export default connect()(Add)
