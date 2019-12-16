import React from 'react';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box'
import { Droppable } from 'react-beautiful-dnd';

import { useStyles } from './styles';
import TaskItems from '../TaskItem/index';

function TaskList(props){
    const classes = useStyles();
    const { status, itemTodos } = props;
    return(
        <Grid item md={4} xs={12} className={classes.root}>
            <Box className={classes.box}>
                {status.label}
            </Box>
            <Droppable droppableId={status.value}>
                {provided =>(
                    <div 
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className={classes.tasks}
                    >
                        <TaskItems col={status.value} itemTodos={itemTodos} />
                        {provided.placeholder}
                    </div>
            )}
            </Droppable>
        </Grid>
    )
}

export default TaskList;