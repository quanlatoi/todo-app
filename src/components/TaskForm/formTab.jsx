import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Field, reduxForm } from 'redux-form';
import { TextField, Grid, Button } from '@material-ui/core';

import * as modalAction from '../../actions/modal';
import * as tabAction from '../../actions/tab';
import validate from './validate'

const renderTextField = ({
    label,
    input,
    meta: { touched, invalid, error},
    ...custom
})=> {
    console.log({...input})
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

function form(props) {
    const {
        handleSubmit,
        modalActionsCreator,
        tabActionCreator,
        tabSelection,
    } = props;
    console.log(props)
    const { hideModal } = modalActionsCreator;
    const { createTab, updateTab } = tabActionCreator;
    console.log(props)
    const submitForm = data => {
        if (tabSelection) {
            updateTab(tabSelection._id, data);
        } else {
            createTab(data.nameTab)
        }
        hideModal()
    }
    return (
        <Grid item md={8}>
            <form onSubmit={handleSubmit(submitForm)}>
                <Field 
                    name= 'nameTab'
                    component={renderTextField}
                    type= 'text'
                    fullWidth
                    label= 'Tiêu đề'
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

const mapStateToProps = state => {
    const { tabSelection } = state.tabReducer;
    return {
        initialValues: {
            nameTab: tabSelection? tabSelection.name : ''
        },
        tabSelection
    }
}

const mapDispatchToProps = dispatch => {
    return {
        modalActionsCreator : bindActionCreators(modalAction, dispatch),
        tabActionCreator : bindActionCreators(tabAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(reduxForm({
    form: 'tab',
    validate
})(form));
