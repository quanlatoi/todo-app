import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { List, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import * as tabAction from '../../actions/tab';
import HeaderDashBoard from './HeaderDashBoard';
import Content from './Content';

const useStyles = makeStyles({
    ul: {
        display: 'flex',
        flexWrap: 'wrap',
    },
})

function Dashboard(props) {
    const classes = useStyles();
    const { tabActionCreator, token } = props;
    const { getListTab } = tabActionCreator;
    console.log(props);
    useEffect(() => {
        getListTab(token);
    }, [])
    return (
        <Grid container direction='row'>
            <List className={classes.ul}>
                <Content />
                <HeaderDashBoard />
            </List>
        </Grid>
    )
}

const mapStateToProps = state => {
    const { token } = state.localStorageReducer;
    return {
        token
    }
}

const mapDispathToProps = dispatch => {
    return {
        tabActionCreator: bindActionCreators(tabAction, dispatch),
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Dashboard);