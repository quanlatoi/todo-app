import React from 'react';
import { connect } from 'react-redux';
import { Snackbar, Slide } from '@material-ui/core';

import { showNoti } from '../../actions/notification';

function message(...message){
    let newMessage = '';
    if (message === 'error') {
        newMessage = 'Server đang bị lỗi, xin thử lại vào lúc khác';
    } else {
        newMessage = message;
    }
    return newMessage
}

function SlideTransition(props) {
    return <Slide {...props} direction="down" />;
}

function Notification(props) {
    const { messages, isOpen, hideNotification } = props;

    const newMessage = message(messages)

    const handleClose = () => {
        hideNotification(false);
    }

    return <Snackbar 
        anchorOrigin={{vertical: 'top', horizontal: 'right'}}
        key={{vertical: 'top', horizontal: 'right'}}
        message= {newMessage}
        TransitionComponent={SlideTransition}
        open={isOpen}
        autoHideDuration={6000}
        onClose={handleClose}
    ></Snackbar>
}

const mapStateToProps = state => {
    const { messages, isOpen } = state.failReducer;
    return {
        messages,
        isOpen
    }
}

const mapDispatchToProp = dispatch => {
    return {
        hideNotification: isOpen => dispatch(showNoti(isOpen))
    }
}


export default connect(mapStateToProps, mapDispatchToProp)(Notification);
