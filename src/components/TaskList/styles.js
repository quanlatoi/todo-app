import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles({
    root: {
        padding: '0 5px',
        borderRadius: '2px',
    },
    box: {
        margin: ' 0 0 .5rem 0',
        padding: '1rem 0',
        fontSize: '20px',
        fontFamily: 'Arial, Helvetica, sans-serif',
        align: 'center',
        boxShadow: '0px 1px 3px 0px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 2px 1px -1px rgba(0,0,0,0.12)',
        borderRadius: '4px',
        textAlign: 'center',
    },
    tasks: {
        background: 'rgba(9,30,66,.08)',
        padding: '2px'
    }
})