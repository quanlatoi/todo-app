import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Grid, Box, Button } from '@material-ui/core';
import { Add } from '@material-ui/icons';
import PropTypes from 'prop-types';

import * as tabAction from '../../../actions/tab';
import * as modalAction from '../../../actions/modal';
import { useStyles } from './styles';
import TabForm from '../../TaskForm/formTab';

function HeaderDashBoard(props) {
    const classes = useStyles();
    const { modalActionCreator, tabActionCreator } = props;
    const { showModal, changeTitle, changeContent } = modalActionCreator;
    const { getInfoToUpdateTab } = tabActionCreator;
    const openForm = ()=>{
        getInfoToUpdateTab(null)
        showModal();
        changeTitle('Thêm Tab');
        changeContent(<TabForm />);
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
                    <Add />Thêm mới Tab
                </Button>
            </Box>
            {/* <Grid className={classes.wrapperSearch} item xs={6}>
                { renderSearching() }
            </Grid> */}
        </Grid>
    )
}

HeaderDashBoard.propTypes = {
    modalActionCreator: PropTypes.shape({
        showModal: PropTypes.func,
        hideModal: PropTypes.func,
        changeTitle: PropTypes.func,
        changeContent: PropTypes.func,
    })
}

const disPatchToProps = dispatch =>{
    return {
        modalActionCreator : bindActionCreators(modalAction, dispatch),
        tabActionCreator : bindActionCreators(tabAction, dispatch),
    }
}

export default connect( null, disPatchToProps)(HeaderDashBoard);
