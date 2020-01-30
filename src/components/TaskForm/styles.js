import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles({
    root: {
        width: '100%',
        height: '100%',
        overflow: 'auto',
        fontFamily: '"Cabin", sans-serif',
        fontWeight: 600,
        fontSize: '15px',
        backgroundColor: 'rgba(0, 0, 0, 0.4)',
    },
    modal: {
        padding: '.1em .1em .1em 3em',
        zIndex: 9999,
        outline: 'none',
        overflow: 'hidden',
        width: '600px',
        borderRadius: '5px',
        background: 'rgb(255, 255, 255)',
        margin: '50px auto',
        border: '1px solid #888',
        position: 'relative',
    },
    title: {
        fontSize: '30px',
        textAlign: 'center',
        margin: 0,
        textTransform: 'uppercase'
    },
    // rootButton: {
    //     display: 'flex',
    //     justifyContent : 'flex-end'
    // },
    // button: {
    //     padding: '.4em 1em',
    //     margin: '.2em'
    // },
    icon: {
        float: "right"
    }
});