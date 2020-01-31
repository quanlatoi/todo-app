import React, { Fragment, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Box, Grid } from '@material-ui/core';

import * as taskAction from '../../actions/tasks'
import Content from './Content';
import Header from './Header';

function Home(props) {
    const { taskActionCreator } = props;
    const { getListTask } = taskActionCreator;
    const getTabId = window.location.href.split('/')[window.location.href.split('/').length - 1];
    
    useEffect(() => {
        getListTask(getTabId)
    }, []);

    return (
        <Fragment>
            <Box
            display="flex"
            justifyContent='space-between'
            style={{background: 'rgba(0,0,0,.3'}}
            >
                <Grid container direction='row'>
                    <Header />
                </Grid>
            </Box>
            <Content />
        </Fragment>
    )
}

const mapDispathToProps = dispatch => {
    return {
        taskActionCreator: bindActionCreators(taskAction, dispatch),
    }
}

export default connect(null, mapDispathToProps)(Home);