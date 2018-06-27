/**
 * Created by lilit on 2018-06-18.
 */
/**
 * Created by lilit on 2018-06-12.
 */

import React, {Component} from 'react'
import {connect} from 'react-redux'
import {handleSaveUser} from '../actions/addUser'

class AddUser extends Component {
    state = {
        user: '',

    };
    handleAddUser = (e) => {
        const user = e.target.value;

        this.setState(() => ({
            user
        }))
    };
    handleSubmit = (e) => {
        e.preventDefault();

        const { user } = this.state;
        const { dispatch } = this.props;

        dispatch(handleSaveUser(user ));

        this.setState(() => ({
            user: '',

        }))
    };
    render() {
        const { user} = this.state;
        return (
            <div>
                <h3 className='center'>Create New User</h3>
                <form className='new-tweet' onSubmit={this.handleSubmit}>
                    <h5>Enter your name.</h5>
                    <input
                        placeholder="Full name"
                        value={user}
                        onChange={this.handleAddUser}
                    />
                    <button
                        className='btn'
                        type='submit'
                        disabled={user === ''}>
                        Submit
                    </button>
                </form>
            </div>
        )
    }
}
export default connect()(AddUser)
