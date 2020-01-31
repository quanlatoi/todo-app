import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { AccountCircle, VpnKey, LockOutlined } from '@material-ui/icons';
import { Box, Container, CssBaseline, Typography, Avatar, Link, Grid } from '@material-ui/core';
import {
    Button,
} from '@material-ui/core';

import validate from './validate';
import { useStyles } from './styles';
import { renderTextField } from './renderForm';
import { loginRequest } from '../../actions/auth';

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" href="#">
          Website
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

function Login(props) {
    const classes = useStyles();
    const { handleSubmit, loginAction } = props;
    const submitForm = user => {
        loginAction(user)
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlined />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Đăng nhập
                </Typography>
                <form className={classes.form} onSubmit={handleSubmit(submitForm)}>
                    <Field
                        name='username'
                        type='text'
                        label='Tên đăng nhập'
                        margin='normal'
                        icons={AccountCircle}
                        component={renderTextField}
                    />
                    <Field
                        name='password'
                        type='password'
                        label='Mật khẩu'
                        margin='normal'
                        icons={VpnKey}
                        component={renderTextField}
                    />
                    <Button fullwidth='true' variant='contained' type='submit' color='secondary'  className={classes.submit}>
                        Đăng nhập
                    </Button>
                    <Grid container>
                        <Grid item xs>
                        <Link href="#" variant="body2">
                            Quên mật khẩu
                        </Link>
                        </Grid>
                        <Grid item>
                        <Link href="#" variant="body2">
                            {"Bạn chưa có tài khoản? hãy đăng ký"}
                        </Link>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={8}>
                <Copyright />
            </Box>
        </Container>
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
