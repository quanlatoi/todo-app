import React from 'react';
import { Field, reduxForm } from 'redux-form'
import TextField from '@material-ui/core/TextField';
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

function form(props){
    const { handleSubmit, taskActionsCreator, taskEditing } = props;
    const { addNewTaskAction, actionEditTask, } = taskActionsCreator;
    const submitForm = (data)=>{
        const { title, description } = data
        if(taskEditing){
            actionEditTask(taskEditing.id, {title, description})
        }
        else{
            addNewTaskAction(title, description)
        }
        props.modalActionsCreator.hideModal()
    }
    return(
        <form onSubmit={ handleSubmit(submitForm) } >
            <Field 
                name= 'title'
                component={renderTextField}
                type= 'text'
                fullWidth
                label= 'Tiêu đề'
                margin="normal"
                value= {taskEditing && taskEditing.title}
            />
            <Field 
                value= {taskEditing && taskEditing.description}
                name= 'description'
                component={renderTextField}
                type= 'text'
                label="Mô tả"
                multiline
                fullWidth
                rowsMax="8"
                margin="normal"
            />
        </form>
    )
}

const mapStateToProps = state =>{
    return {
        taskEditing: state.listTasks.task,
        initialValues: state.listTasks.task
    }
}

const disPatchToProps = dispatch =>{
    return {
        taskActionsCreator : bindActionCreators(taskActions, dispatch),
        modalActionsCreator : bindActionCreators(modalAction, dispatch)
    }
}
// form = 

export default connect(mapStateToProps, disPatchToProps)(reduxForm({
    form: 'FORM',
    validate
})(form));