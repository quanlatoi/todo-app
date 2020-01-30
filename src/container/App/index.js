import React from 'react';

import { useStyles } from './styles';
import LoadEffect from '../../components/Loading';
import Modal from '../../components/TaskForm';
// import Notification from '../../components/Notification';

function App(props) {
    const classes = useStyles();
    const { component } = props;

    return (
        <div className={classes.root}>
           <LoadEffect />
            {component}
            <Modal />
            {/* <Notification /> */}
        </div>
    )
}

export default App;