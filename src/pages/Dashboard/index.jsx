import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { makeStyles } from '@material-ui/core/styles';
import { List, Grid } from '@material-ui/core';

import * as tabAction from '../../actions/tab';
import ButtonAddTab from './ButtonAddTab';
import Content from './Content';
import CustomLink from '../../router/CustomLink';

const useStyles = makeStyles(theme => ({
    ul: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%'
    },
    drawerPaper: {
        width: 'calc(30% - 5px)',
    },
    toolbar: theme.mixins.toolbar,
    allTab: {
        backgroundColor: '#fff',
        borderRadius: 5,
        paddingLeft: 5,
    },
    '&:nth-child': {
        textDecoration: 'none'
    }
}))

function Dashboard(props) {
    const classes = useStyles();
    const { tabActionCreator, token } = props;
    const { getListTab } = tabActionCreator;
    console.log(props);
    useEffect(() => {
        getListTab(token);
    }, [])

    const drawer = (
        <CustomLink />
    )

    return (
        <Grid
            container
            direction="row"
            justify="center"
        >
            <Grid item xs={1} sm={3}>
                <div className={classes.toolbar} />
                {drawer}
            </Grid>
            <Grid item xs={11} sm={9} className={classes.allTab}>
                <div className={classes.toolbar} />
                <Grid container direction='row'>
                    <h2>Danh sách bảng</h2>
                    <List className={classes.ul}>
                        <Content />
                        <ButtonAddTab />
                    </List>
                </Grid>
            </Grid>
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