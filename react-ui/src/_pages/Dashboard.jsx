import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as authActions from '../_actions/authActions';
import Button from '../_common/Button.jsx'
import Newsfeed from './dashboard/newsfeed.jsx';

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        logoutUser: authActions.logoutUser,
        getUserFeed: authActions.getUserFeed,
        incrementPostLikes: authActions.incrementPostLikes
    }, dispatch)
};

const mapStateToProps = (state) => {
    return {
        name: state.auth.name,
        email: state.auth.email,
        picture: state.auth.picture,
        token: state.auth.token,
        posts: state.auth.posts
    };
}

class Dashboard extends Component {
    componentDidMount() {
       this.props.getUserFeed(this.props.token);
    }

    render() {
        return (
            <div id='dashboard'>
                <div className="card">
                    <img src={this.props.picture ? this.props.picture.data.url : ''} alt={this.props.name} style={{ width: 100 }} />
                    <h1>Hi, {this.props.name}!</h1>
                    <p className="">{this.props.email}</p>
                </div>
                <Newsfeed posts={this.props.posts} incrementLikes={this.props.incrementPostLikes}/>
                <Button onClick={this.props.logoutUser} text='Logout' styles='btn-facebook'  />
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);