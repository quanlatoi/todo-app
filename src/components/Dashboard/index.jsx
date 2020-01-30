import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as tabAction from '../../actions/tab';
import HeaderDashBoard from './HeaderDashBoard';
import Content from './Content';

function Dashboard(props) {
    const { tabActionCreator } = props;
    const { getListTab } = tabActionCreator;
    useEffect(() => {
        getListTab();
    }, []);
    return (
        <div>
            <HeaderDashBoard />
            <Content />
        </div>
    )
}

const mapDispathToProps = dispatch => {
    return {
        tabActionCreator: bindActionCreators(tabAction, dispatch),
    }
}

export default connect(null, mapDispathToProps)(Dashboard);