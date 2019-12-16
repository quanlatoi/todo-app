import React, { useEffect, Fragment } from 'react';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import { DragDropContext } from 'react-beautiful-dnd';
import { makeStyles } from '@material-ui/core/styles'

import {Status} from './constants/index';
import TaskList from './components/TaskList/index';
import TaskForm from './components/TaskForm/form';
import Search from './components/search/index';
import * as taskActions from './actions/tasks';
import * as modalAction from './actions/modal';

const useStyles = makeStyles(theme =>({
    root: {
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexDirection: 'column' 
        },
        [theme.breakpoints.up('md')]:{
            display: 'flex',
            flexDirection: 'row' 
        }
    },
    wrapperSearch: {
        // margin: 'auto',
        display: 'flex',
        // justifyContent: 'center',
        alignItems: 'center',
    }
}))

function App(props){
    const classes = useStyles();
    const { taskActionsCreator, modalActionCreator, data: { data: items} } = props;
    useEffect(()=>{
        taskActionsCreator.getListTask();
    }, [taskActionsCreator])

    const renderDashBoard = ()=>{
        const itemTodos = items;
        const styles = {
            width: '100%',
            padding: '0 15px',
            flexWrap: 'unset',
            marginRight: '0 auto'
        }
        const onDragEnd = result =>{
            const { destination, source, /*draggableId*/ } = result;
            const {sortTasks} = taskActionsCreator;
            // const a = 
            let start = '',
                finish = '';
            if(!destination){
                return;
            }

            if(destination.droppableId === source.droppableId
            && destination.index === source.index){
                return;
            }
            
            for(let i = 0; i < 3; i++){
                if(Status[i].value === source.droppableId){
                    start = Status[i].value;
                }
                if(Status[i].value === destination.droppableId){
                    finish = Status[i].value
                }
            }
            const tasks1 = itemTodos.filter(
                item => item.status === start
            )
            const tasks2 = itemTodos.filter(
                item => item.status !== start
            )
            if(start === finish){
                const tasks = Array.from(tasks1);
                const movedItem = tasks.find((item, index)=>{
                    return source.index === index
                })
                const remainingItems = tasks.filter((item, index)=>{
                    return index !== source.index
                })
                const reoderItems = [
                    ...remainingItems.slice(0, destination.index),
                    movedItem,
                    ...remainingItems.slice(destination.index)
                ]
                reoderItems.forEach((item, index)=>{
                    return item.position = index
                })
                sortTasks(tasks2.concat(reoderItems));
                return;
            }
            // kéo thả giữa 2 task khác nhau
            const d = tasks1.splice(source.index, 1)
            d[0]['status'] = destination.droppableId;
            tasks2.splice(destination.index, 0, d[0]);
            const newData = tasks2.concat(tasks1);
            sortTasks(newData);
            return;
        }
        const onDragUpdate = (a)=>{
            
        }
        let xhtml = null;
        xhtml = (
            <Grid className={classes.root} container direction='row' spacing={0} style={styles}>
                <DragDropContext onDragEnd={onDragEnd} onDragUpdate={onDragUpdate}>
                    {Status.map(
                        (status, index)=>{
                            return <TaskList key={index} status={status} itemTodos={itemTodos} />;
                        }
                    )}
                </DragDropContext>
            </Grid>
        )
        return xhtml
    }

    const openForm = ()=>{
        const { showModal, changeTitle, changeContent } = modalActionCreator;
        const { getEditTask } = taskActionsCreator;
        getEditTask(null);
        showModal();
        changeTitle('Thêm công việc');
        changeContent(<TaskForm />);
    }

    const renderSearching = ()=>{
        let xhtml = null;
        let value = '';
        xhtml = < Search 
                    getKeywods={
                        (e)=>{
                            value = e.target.value;
                            if(value.length === 0){
                                const { getListTask } = taskActionsCreator;
                                getListTask();
                            }
                            //bắt sự kiện cho nút enter
                            if(e.keyCode === 13){
                                const { findTask } = taskActionsCreator;
                                findTask(value)
                            }
                        }
                    }

                    onsubmit = {
                        ()=>{
                            const { findTask } = taskActionsCreator;
                            findTask(value)
                        }
                    }
                />
        return xhtml;
    }

    return (
        <Fragment>
            <Box display="flex" justifyContent='space-between'style={{background: 'rgba(0,0,0,.3'}}>
                <Grid container>
                    <Grid item xs={6}>
                        <Box id='wrapper-button'>
                            <Button style={{padding: 10}} variant="contained" color='primary' size='small' onClick={openForm}>
                                <AddIcon />Thêm mới công việc
                            </Button>
                        </Box>
                    </Grid>
                    <Grid className={classes.wrapperSearch} item xs={6}>
                        { renderSearching() }
                    </Grid>
                </Grid>
            </Box>
            { renderDashBoard() }
        </Fragment>
    );
}

App.propTypes = {
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

const mapStateToProps = (state)=>{
    return {
        data: state.listTasks
    }
}

const disPatchToProps = dispatch =>{
    return {
        taskActionsCreator : bindActionCreators(taskActions, dispatch),
        modalActionCreator : bindActionCreators(modalAction, dispatch)
    }
}

export default connect(mapStateToProps, disPatchToProps)(App);