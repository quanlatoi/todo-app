import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as tabAction from '../../actions/tab';
import HeaderDashBoard from './HeaderDashBoard';
import Content from './Content';

function Dashboard(props) {
    const { tabActionCreator, token } = props;
    const { getListTab } = tabActionCreator;
    console.log(props);
    getListTab(token);
    return (
        <div>
            <HeaderDashBoard />
            <Content />
        </div>
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