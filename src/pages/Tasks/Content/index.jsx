import React from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import { DragDropContext } from 'react-beautiful-dnd';

import { useStyles } from './styles'
import { onDragEnd } from './DragAndDrop';
import { Status } from '../../../constants';
import TaskList from '../../../components/TaskList';

function Content(props) {
    const classes = useStyles()
    const { listTasks: { data } } = props;
    return (
        <Grid className={classes.root} item>
            <DragDropContext onDragEnd={result => onDragEnd(result, data)}>
                {Status.map( (status, index) => {
                    return <TaskList
                        key={index}
                        status={status}
                        itemTodos={data}
                    />
                })}
            </DragDropContext>
        </Grid>
    )
}

const mapStateToProps = state => {
    return {
        listTasks: state.listTasks,
    }
}

export default connect(mapStateToProps, null)(Content);