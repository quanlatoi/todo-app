import React from 'react';

import { useStyles } from './styles';
import LoadEffect from '../../components/Loading';
import Modal from '../../components/TaskForm';

function App(props) {
    const classes = useStyles();
    const { component } = props;

    return (
        <div className={classes.root}>
           <LoadEffect />
            {component}
            <Modal />
        </div>
    )
}

export default App;