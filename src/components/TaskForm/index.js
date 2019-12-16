import React from 'react';
import { Modal } from '@material-ui/core';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';

import { useStyles } from './styles';
import * as modalActions from '../../actions/modal';
import * as taskActions from '../../actions/tasks'

function TaskForm(props){
    const classes = useStyles();
    const { open, title, component, modalActionsCreator, taskActionsCreator, form } = props;
    const { hideModal } = modalActionsCreator;
    const { addNewTaskAction, actionEditTask } = taskActionsCreator;
    const handleSubmit = ()=>{
        /**
         * nếu initial không có giá trị 
         * => submit form tạo mới
         * nếu initial có giá trị
         * => submit update form
         */
        if(!props.form.FORM.initial){
            const { title, description} = form.FORM.values;
            addNewTaskAction(title, description);
            hideModal();
        }
        else{
            const {  id } = form.FORM.initial;
            const { title, description } = form.FORM.values;
            actionEditTask(id, {title, description})
            hideModal();
        }
    }
    return (
        <Modal open={open} className={classes.root} >
            <div className={classes.modal}>
                <div className={classes.icon}>
                    <IconButton onClick={hideModal}>
                        <Icon>clear</Icon>
                    </IconButton>
                </div>
                <Grid container spacing={2}>
                    <Grid item md={8}>
                        <span className={classes.title}>{title}</span>
                    </Grid>
                    <Grid item md={8}>
                        {component}
                    </Grid>
                    <Grid item md={8} className={classes.rootButton} >
                        <Button variant="contained" color="primary" className={classes.button} onClick={ handleSubmit}>
                                lưu lại
                        </Button>
                        <Button variant="contained" color="secondary" className={classes.button} onClick={hideModal}>
                                quay lại
                        </Button>
                    </Grid>
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