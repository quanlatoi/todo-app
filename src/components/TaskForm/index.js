import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Grid, Icon, IconButton, Modal } from '@material-ui/core';

import { useStyles } from './styles';
import * as modalActions from '../../actions/modal';
import * as taskActions from '../../actions/tasks'

function TaskForm(props){
    const classes = useStyles();
    const { open, title, component, modalActionsCreator } = props;
    const { hideModal } = modalActionsCreator;
    
    return (
        <Modal open={open} className={classes.root}>
            <div className={classes.modal}>
                <div className={classes.icon}>
                    <IconButton onClick={hideModal}>
                        <Icon>clear</Icon>
                    </IconButton>
                </div>
                <Grid container spacing={3}>
                    <Grid item md={8}>
                        <span className={classes.title}>{title}</span>
                    </Grid>
                    {component}
                </Grid>
            </div>
        </Modal>
    )
}

TaskForm.propTypes = {
    open: PropTypes.bool,
    title: PropTypes.string,
    component: PropTypes.object,
    modalActionsCreator: PropTypes.shape({
        hideModal: PropTypes.func,
    })
}

const mapStateToProps = state =>({
    open: state.modal.showModal,
    title: state.modal.title,
    component: state.modal.component,
    form: state.form
})

const disPatchToProps = dispatch =>{
    return {
        taskActionsCreator : bindActionCreators(taskActions, dispatch),
        modalActionsCreator : bindActionCreators(modalActions, dispatch)
    }
}

export default connect(mapStateToProps, disPatchToProps)(TaskForm);