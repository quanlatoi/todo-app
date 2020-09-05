import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme =>({
    root: {
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexDirection: 'column',
            margin: '20px 0'
        },
        [theme.breakpoints.up('md')]:{
            display: 'flex',
            flexDirection: 'row',
        },
        width: '100%',
        margin: '5px 0px',
        padding: '0 15px',
        flexWrap: 'unset',
        marginRight: '0 auto',
    }
}))