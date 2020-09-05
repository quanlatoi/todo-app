import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme =>({
    root: {
        margin: '5px 0',
        borderRadius: '5px',
    },
    box: {
        [theme.breakpoints.up('md')]:{
            margin: '0 5px .5rem 5px',
        },
        margin: ' 0 0 .5rem 0',
        padding: '1rem 0',
        fontSize: '20px',
        fontFamily: 'Arial, Helvetica, sans-serif',
        align: 'center',
        boxShadow: '0px 1px 3px 0px rgba(0,0,0,0.2)',
        borderRadius: '5px',
        textAlign: 'center',
        background: '#fafafa'
    },
    tasks: {
        padding: '2px'
    }
}))