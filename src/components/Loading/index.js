import React from 'react';
import { connect } from 'react-redux';

import { useStyles } from './styles';
import loadingIcon from '../../images/loading.png';

function LoadEffect(props){
    const { showLoading } = props;
    const classes = useStyles();
    let xhtml = null;
    if(showLoading){
        xhtml = (
            <div className={classes.root}>
                <img src={loadingIcon} alt='loading' className={classes.icon}  />
            </div>
        )
    }
    return xhtml;
}

const mapStateToProps = (state)=>{
    return {
        showLoading: state.ui.showLoading
    }
}

export default connect(mapStateToProps)(LoadEffect)