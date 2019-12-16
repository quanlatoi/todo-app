import React from 'react';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import { Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import { useStyles } from './styles';

export default function Search(props){
    const classes = useStyles();
    const { getKeywods, onsubmit } = props

    return(
        <Paper className={classes.root}>
            <InputBase
            className={classes.input}
            placeholder="Search..."
            inputProps={{ 'aria-label': 'search google maps' }}
            onKeyUp = { getKeywods }
            />
            <Button className={classes.iconButton} aria-label="search" onClick= { onsubmit } >
                <SearchIcon  />
            </Button>
        </Paper>
    )
}


