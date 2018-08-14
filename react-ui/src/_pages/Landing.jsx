import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '../_common/Button.jsx';

import * as authActions from '../_actions/authActions';
import { bindActionCreators } from 'redux';

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        updateUserInfo: authActions.updateUserInfo,
    }, dispatch)
};

class Landing extends Component {

    login = (props) => {
        window.FB.login(res => {
            if (res.authResponse) {
                this.props.updateUserInfo(res);
            }
        }, { scope: 'email, public_profile, user_posts', return_scopes: true });
    }

    render() {
        return (
            <div id='landing' className='row-container'>
                <div className='landingBox'>
                    <div className='App-title'>Welcome to Just Coffee!</div>
                    <Button onClick={this.login} text='Continue with Facebook' styles='btn-facebook' />
                </div>
            </div>
        )
    }
};

export default connect(null, mapDispatchToProps)(Landing);