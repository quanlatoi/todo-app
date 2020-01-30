import React from 'react';
import { ListItemSecondaryAction, IconButton } from '@material-ui/core';
import { Edit, Delete } from '@material-ui/icons';
import { useStyles } from '../styles';

import TabForm from '../../../TaskForm/formTab';

function ListItemSecondary(props) {
    const { 
        tab,
        deleteTab,
        showModal,
        changeContent,
        changeTitle,
        getInfoToUpdateTab,
    } = props;
    const handleEdit = tab => {
        getInfoToUpdateTab(tab)
        showModal();
        changeTitle('Sửa Tab');
        changeContent(<TabForm />);
    }

    const handleDelete = id => {
        deleteTab(id)
    }

    const classes = useStyles();
    return (
        <ListItemSecondaryAction>
            <IconButton
                className={classes.button}
                edge="end"
                aria-label="edit"
                title='edit'
                onClick={() => handleEdit(tab)}
            >
              <Edit />
            </IconButton>
            <IconButton 
                className={classes.button}
                edge="end"
                aria-label="delete"
                title='delete'
                onClick={() => handleDelete(tab._id)}
            >
              <Delete />
            </IconButton>
        </ListItemSecondaryAction>
    )
}

export default ListItemSecondary