import React from 'react';
import { Route, Link } from 'react-router-dom';
import { ListItem, ListItemText, ListItemIcon, Icon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    customLink: {
        textDecoration: 'none'
    },
    active: {
        backgroundColor: 'rgba(0,0,0,.08)'
    }
})

const pages = [
    {
        path: '/',
        name: 'Dashboard',
        icon: 'tableChart'
    }
]

const MenuLink = ({ label, to, activeWhenExact, icon }) => {
    const classes = useStyles()
    return (
        <Route 
            path={to}
            exact={activeWhenExact}
            children={({ match }) => {
                return (<Link to={to} className={classes.customLink}>
                    <ListItem button title={label} className={match && classes.active}>
                        <ListItemIcon>
                            <Icon>{icon}</Icon>
                        </ListItemIcon>
                        <ListItemText primary={label} />
                    </ListItem>
                </Link>
            )}}
        />
)}

function CustomLink(props) {
    return pages.map(page => (
        <MenuLink key={page.path} to={page.path} label={page.name} icon={page.icon} />
    ))
}

export default CustomLink;