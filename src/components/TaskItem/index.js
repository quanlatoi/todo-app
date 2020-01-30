import React from 'react';
import Card from '@material-ui/core/Card';
import CardConten from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import Icon from '@material-ui/core/Icon';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Draggable } from 'react-beautiful-dnd';

import { useStyles } from './styles';
import TaskForm from '../TaskForm/form';
import * as taskActions from '../../actions/tasks';
import * as modalAction from '../../actions/modal';

function TaskItems(props){
    const classes = useStyles();
    const { col, itemTodos, taskActionsCreator, modalActionsCreator } = props;
    //update action
    const { getEditTask, deleteTask } = taskActionsCreator;
    const a = task =>{
        const { changeTitle, changeContent ,showModal } = modalActionsCreator;
        getEditTask(task);
        showModal();
        changeTitle('Cập nhật công việc');
        changeContent(<TaskForm />);
    }
    //delete action
    const b = id =>{
        deleteTask(id);
    }
    const tasks = itemTodos.filter(item => item.status === col );
    let sortPosition = tasks.sort((a, b) => a.position - b.position);
    return sortPosition.map((task, index)=>{
        const handleEdit = ()=>{
            a(task);
        }
        const handeleDelete = ()=>{
            b(task._id)
        }
        return (
            <Draggable draggableId={task._id} index={index} key={task._id} className={classes.root1}>
                {provided =>(
                    <Card className={classes.Card} 
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                    >
                        <CardConten>
                            <Grid container direction="row" justify="space-between" alignItems="center">
                                <Grid item >
                                    <Typography component='h2'>
                                        { task.title }
                                    </Typography>
                                </Grid>
                            </Grid>
                            {task.description? <p>{ task.description }</p> : null }
                        </CardConten>
                        <CardActions className={classes.CardActions}>
                            <Fab color="primary" aria-label="Edit" size='small' onClick={ handleEdit }>
                                <Icon fontSize='small'>
                                    edit_icon
                                </Icon>
                            </Fab>
                            <Fab color="primary" aria-label="Delete" size='small' onClick={ handeleDelete }>
                                <Icon fontSize='small'>
                                    delete_icon
                                </Icon>
                            </Fab>
                        </CardActions>
                    </Card>
                )}
            </Draggable>
        )
    })
}

const disPatchToProps = dispatch =>{
    return {
        taskActionsCreator : bindActionCreators(taskActions, dispatch),
        modalActionsCreator : bindActionCreators(modalAction, dispatch)
    }
}

export default connect(null, disPatchToProps)(TaskItems);