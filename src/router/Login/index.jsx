import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { AccountCircle, VpnKey } from '@material-ui/icons';
import {
    Button,
} from '@material-ui/core';

import validate from './validate';
import { renderTextField } from './renderForm';
import { loginRequest } from '../../actions/auth';

function Login(props) {
    const { handleSubmit, loginAction } = props;
    const submitForm = user => {
        loginAction(user)
    }

    return (
        <form onSubmit={handleSubmit(submitForm)}>
            <Field
                name='username'
                type= 'text'
                label= 'Tên đăng nhập'
                margin= 'normal'
                icons= {AccountCircle}
                component= {renderTextField}
            />
            <Field
                name='password'
                type= 'text'
                label= 'Mật khẩu'
                margin= 'normal'
                icons= {VpnKey}
                component= {renderTextField}
            />
            <Button variant='contained' type='submit' color='secondary'>
                Đăng nhập
            </Button>
        </form>
    )
}

const mapStateToProps = state => {
    const { token } = state.authReducer;
    return {
        token
    }
}

const mapDispatchToProps = dispatch => {
    return {
        loginAction: user => dispatch(loginRequest(user)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
    form: 'login',
    validate,
})(Login));
