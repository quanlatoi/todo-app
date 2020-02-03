import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme =>({
    li: {
        minWidth: 175,
        overflow: 'hidden',
        borderRadius: 4,
        color: 'rgba(255, 255, 255, 0.87)',
        transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        transform: 'translate(0)',
        backgroundColor: 'rgb(196, 196, 196)',
        width: '23.5%',
        padding: 0,
        margin: '0 2% 2% 0',
        '&:hover': {
            backgroundColor: 'rgb(133, 129, 129)'
        },
        [theme.breakpoints.down('sm')]: {
            width: 'calc(45% - 4px)',
            marginRight: 8,
            marginBottom: 8,
        },
        [theme.breakpoints.up('md')]: {
            width: '32%',
            marginRight: 8,
            marginBottom: 8,
        },
        '&:last-child': {
            background: 'rgb(133, 129, 129)'
        }
    },
    button: {
        backgroundColor: 'rgb(196, 196, 196)',
        transition: 'cubic-bezier(0.4, 0, 0.2, 1) 500ms',
        padding: 0,
        width: '100%',
        height: '100%',
        minHeight: 131,
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
}));
