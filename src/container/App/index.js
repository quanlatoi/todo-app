import React, { Fragment } from 'react';
import { CssBaseline, Container, AppBar } from '@material-ui/core';

import { useStyles } from './styles';
import LoadEffect from '../../components/Loading';
import Modal from '../../components/TaskForm';

function App(props) {
    const classes = useStyles();
    const { component } = props;

    return (
        <Fragment>
            <CssBaseline />
            <AppBar position='fixed'>
                header app bar
            </AppBar>
            <Container maxWidth='xl'>
                <LoadEffect />
                {component}
                <Modal />
            </Container>
        </Fragment>
    )
}

export default App;