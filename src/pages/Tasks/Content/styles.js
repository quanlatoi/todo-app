import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme =>({
    root: {
        [theme.breakpoints.down('sm')]: {
            display: 'flex',
            flexDirection: 'column' 
        },
        [theme.breakpoints.up('md')]:{
            display: 'flex',
            flexDirection: 'row' 
        },
        width: '100%',
        padding: '0 15px',
        flexWrap: 'unset',
        marginRight: '0 auto',
    }
}))