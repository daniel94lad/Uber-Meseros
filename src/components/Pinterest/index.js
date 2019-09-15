import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import fetchUsers from '../../actions/fetchUsers';
import {getUsersError, getUsers, getUsersPending} from '../../reducers/pinterestReducer';

import LoadingSpinner from '../General/Spinner';

class Pinterest extends Component {
    constructor(props) {
        super(props);

        this.shouldComponentRender = this.shouldComponentRender.bind(this);
    }

    componentWillMount() {
        const {fetchUsers} = this.props;
        fetchUsers();
    }

    shouldComponentRender() {
        const {pending} = this.props;
        if(this.pending === false) return false;
        // more tests
        return true;
    }

    render() {
        const {users, error, pending} = this.props;

        if(!this.shouldComponentRender()) return <LoadingSpinner />
        console.log(this.state)
        return (
            <div>
                <h1>Pinteres</h1>
            </div>
        )
    }
}


const mapStateToProps = state => ({
    error: getUsersError(state),
    users: getUsers(state),
    pending: getUsersPending(state)
})

const mapDispatchToProps = dispatch => bindActionCreators({
    fetchUsers: fetchUsers
}, dispatch)

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Pinterest);