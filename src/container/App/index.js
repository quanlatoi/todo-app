import React, { Fragment } from 'react';
import { CssBaseline } from '@material-ui/core';

import LoadEffect from '../../components/Loading';
import Modal from '../../components/TaskForm';

function App(props) {
    const { component } = props;

    return (
        <Fragment>
            <CssBaseline />
            {/* <AppBar position='fixed'>
                header app bar
            </AppBar> */}
            <LoadEffect />
            {component}
            <Modal />
        </Fragment>
    )
}

export default App;