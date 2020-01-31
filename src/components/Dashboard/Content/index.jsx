import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux';
import moment from 'moment';
import PropTypes from 'prop-types';
import {
	CardContent,
  Typography,
  ListItem,
  ListItemText,
  List,
  Grid
} from "@material-ui/core";
import { Link } from 'react-router-dom';

import { useStyles } from './styles';
import ListItemSecondary from './ListItemSecondaryAction';
import * as tabAction from '../../../actions/tab';
import * as modalAction from '../../../actions/modal';

function Content(props) {
  const classes = useStyles();
	const {
    tabActionCreator,
    modalActionCreator,
		listTab
  } = props
  const { deleteTab, getInfoToUpdateTab } = tabActionCreator;
  const { showModal, changeTitle, changeContent } = modalActionCreator;
	const elementTab = listTab.map(tab => {
		return (
      <Grid key={tab._id} item xs={12} sm={4} md={3}>
        <ListItem className={classes.root}>
          <Link to={{
            pathname: `tasks/${tab._id}`,
            state: { fromDashboard: true}
          }}>
            <ListItemText>
                <CardContent>
                  <Typography className={classes.title}>
                    {tab.name}
                  </Typography>
                  <br />
                  <Typography className={classes.time}>
                    {moment(tab.createdAt).format('YYYY/MM/DD')}
                  </Typography>
                </CardContent>
            </ListItemText>
          </Link>
          <ListItemSecondary
            tab={tab}
            deleteTab={deleteTab}
            showModal={showModal}
            changeContent={changeContent}
            changeTitle={changeTitle}
            getInfoToUpdateTab={getInfoToUpdateTab}
          />
        </ListItem>
      </Grid>
		)
	})
	return (
    <List>
      <Grid container direction='row' spacing={2}>
        {elementTab}
      </Grid>
    </List>
  )
}

Content.propTypes = {
  tabActionCreator: PropTypes.shape({
    deleteTab: PropTypes.func,
  }),
  modalActionCreator: PropTypes.shape({
    deleteTab: PropTypes.func,
  })
}

const mapStateToProps = state => {
	const { listTab } = state.tabReducer
	return {
		listTab
	}
}

const mapDispatchToProp = dispatch => {
  return {
    tabActionCreator: bindActionCreators(tabAction, dispatch),
    modalActionCreator: bindActionCreators(modalAction, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProp)(Content)
