import React from "react"
import { connect } from "react-redux"
import { bindActionCreators } from "redux"
import {
	Grid,
	Box,
	Button,
	ListItem,
	CardContent,
	Typography
} from "@material-ui/core"
import { Add } from "@material-ui/icons"
import PropTypes from "prop-types"

import * as tabAction from "../../../actions/tab"
import * as modalAction from "../../../actions/modal"
import { useStyles } from "./styles"
import TabForm from "../../TaskForm/formTab"

function HeaderDashBoard(props) {
	const classes = useStyles()
	const { modalActionCreator, tabActionCreator } = props
	const { showModal, changeTitle, changeContent } = modalActionCreator
	const { getInfoToUpdateTab } = tabActionCreator
	const openForm = () => {
		getInfoToUpdateTab(null)
		showModal()
		changeTitle("Thêm Tab")
		changeContent(<TabForm />)
	}
    return (
        <ListItem className={classes.li}>
            <Button onClick={openForm} className={classes.button}>
                <CardContent className={classes.cardContent}>
                    <Typography>Tạo mới bảng</Typography>
                </CardContent>
            </Button>
        </ListItem>
	)
}

HeaderDashBoard.propTypes = {
	modalActionCreator: PropTypes.shape({
		showModal: PropTypes.func,
		hideModal: PropTypes.func,
		changeTitle: PropTypes.func,
		changeContent: PropTypes.func
	})
}

const disPatchToProps = dispatch => {
	return {
		modalActionCreator: bindActionCreators(modalAction, dispatch),
		tabActionCreator: bindActionCreators(tabAction, dispatch)
	}
}

export default connect(null, disPatchToProps)(HeaderDashBoard)
