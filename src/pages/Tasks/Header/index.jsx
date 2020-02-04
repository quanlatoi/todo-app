import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Grid, Box, Button } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import PropTypes from 'prop-types';

import * as taskActions from '../../../actions/tasks';
import * as modalAction from '../../../actions/modal';
import { useStyles } from './styles';
import TaskForm from '../../../components/TaskForm/form';
import Search from '../../../components/search';

function Header(props) {
    const classes = useStyles();
    const { modalActionCreator, taskActionsCreator } = props;
    const { showModal, changeTitle, changeContent } = modalActionCreator;
    const { getEditTask, getListTask, findTask } = taskActionsCreator;
    const openForm = ()=>{
        getEditTask(null);
        showModal();
        changeTitle('Thêm công việc');
        changeContent(<TaskForm />);
    }
    const renderSearching = ()=>{
        let xhtml = null;
        let value = '';
        xhtml = (
            <Search 
                getKeywods={
                    (e)=>{
                        value = e.target.value;
                        if(value.length === 0){
                            getListTask();
                        }
                        //bắt sự kiện cho nút enter
                        if(e.keyCode === 13){
                            findTask(value)
                        }
                    }
                }
                onsubmit = {
                    ()=>{
                        findTask(value)
                    }
                }
            />
        )
        return xhtml;
    }
    return (
        <Grid item xs={12} className={classes.root}>
            <Box id='wrapper-button'>
                <Button  
                    style={{padding: 10}}
                    variant="contained"
                    color='primary'
                    size='small'
                    onClick={openForm}
                >
                    <Add />Thêm mới công việc
                </Button>
            </Box>
            <Grid className={classes.wrapperSearch} item xs={6}>
                { renderSearching() }
            </Grid>
        </Grid>
    )
}

Header.propTypes = {
    taskActionsCreator: PropTypes.shape({
        getListTask: PropTypes.func,
        findTask: PropTypes.func
    }),
    modalActionCreator: PropTypes.shape({
        showModal: PropTypes.func,
        hideModal: PropTypes.func,
        changeTitle: PropTypes.func,
        changeContent: PropTypes.func,
    })
}

const disPatchToProps = dispatch =>{
    return {
        taskActionsCreator : bindActionCreators(taskActions, dispatch),
        modalActionCreator : bindActionCreators(modalAction, dispatch)
    }
}

export default connect( null, disPatchToProps)(Header);
