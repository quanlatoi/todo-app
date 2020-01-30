import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    root: {
        marginBottom: '.5rem',
        minWidth: 175,
        overflow: 'hidden',
        borderRadius: 4,
        color: 'rgba(255, 255, 255, 0.87)',
        transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        backgroundColor: 'rgb(64,163,91)',
        '&:hover': {
            backgroundColor: 'rgb(56,143,80)'
        },
    },
    title: {
        fontSize: 25,
    },
    time: {
        fontSize: 15,
    },
    button: {
        color: 'rgba(230,198,13,.5)',
        '&:hover': {
            color: 'rgba(230,198,13,1)'
        }
    }
})