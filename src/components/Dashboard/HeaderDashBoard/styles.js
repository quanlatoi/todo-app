import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme =>({
    cardContent: {
        minWidth: 175,
        overflow: 'hidden',
        borderRadius: 4,
        color: 'rgba(255, 255, 255, 0.87)',
    },
    button: {
        backgroundColor: 'rgb(196, 196, 196)',
        transition: 'cubic-bezier(0.4, 0, 0.2, 1) 500ms',
        padding: 0,
        '&:hover': {
            backgroundColor: 'rgb(133, 129, 129)',
        },
    },
    wrapperSearch: {
        // margin: 'auto',
        display: 'flex',
        // justifyContent: 'center',
        alignItems: 'center',
    }
}));
