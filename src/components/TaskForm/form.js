import React from 'react';
import { Field, reduxForm } from 'redux-form';
import {TextField, Grid, Button} from '@material-ui/core';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import validate from './validate';
import * as taskActions from '../../actions/tasks';
import * as modalAction from '../../actions/modal';

const renderTextField = ({
    label,
    input,
    meta: { touched, invalid, error},
    ...custom
})=> {
    // input.value = custom.values || '';
    return(
        <TextField
            label= { label }
            error= { touched && invalid }
            helperText= { touched && error}
            { ...input }
            { ...custom }
        />
    )
}

const rootButton = {
    display: 'flex',
    justifyContent : 'flex-start'
}

const button = {
    padding: '.4em 1em',
    margin: '1em .4em'
}

function form(props){
    const { handleSubmit, taskActionsCreator, taskEditing, modalActionsCreator } = props;
    const { hideModal } = modalActionsCreator;
    const { addNewTask, actionEditTask, } = taskActionsCreator;
    const submitForm = (data)=>{
        const { title, description } = data
        if(taskEditing){
            actionEditTask(taskEditing._id, data)
        }
        else{
            addNewTask(title, description)
        }
        hideModal()
    }
    return (
        <Grid item md={8}>
            <form onSubmit={ handleSubmit(submitForm) } >
                <Field 
                    name= 'title'
                    component={renderTextField}
                    type= 'text'
                    fullWidth
                    label= 'Tiêu đề'
                    margin="normal"
                />
                <Field 
                    name= 'description'
                    component={renderTextField}
                    type= 'text'
                    label="Mô tả"
                    multiline
                    fullWidth
                    rowsMax="8"
                    margin="normal"
                />
                <div style={rootButton}>
                    <Button type="submit" variant="contained" color="primary" style={button} >
                        lưu lại
                    </Button>
                    <Button variant="contained" color="secondary"  style={button} onClick={hideModal}>
                        quay lại
                    </Button>
                </div>
            </form>
        </Grid>
    )
}

const mapStateToProps = state =>{
    const { task } = state.listTasks;
    return {
        initalValues: {
            title: task && task.title,
            description: task && task.description
        }
    }
}

const disPatchToProps = dispatch =>{
    return {
        taskActionsCreator : bindActionCreators(taskActions, dispatch),
        modalActionsCreator : bindActionCreators(modalAction, dispatch)
    }
}

export default connect(mapStateToProps, disPatchToProps)(reduxForm({
    form: 'FORM',
    validate
})(form));