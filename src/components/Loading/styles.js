import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    root: {
        position: 'fixed',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        zIndex: 99999,
        background: 'rgba(0, 0, 0, .4)'
    },
    icon: {
        margin: '0 auto',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        animation: '$spiner 1s steps(5) infinite',
    },
    '@keyframes spiner': {
        '0%': {
            transform: 'rotate(0deg)'
        },
        '25%': {
            transform: 'rotate(90deg)'
        },
        '50%': {
            transform: 'rotate(180deg)'
        },
        '75%': {
            transform: 'rotate(270deg)'
        },
        '100%':{
            transform: 'rotate(360deg)'
        }
    },
});