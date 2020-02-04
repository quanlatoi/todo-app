import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme =>({
    root: {
        display: 'flex',
        flexDirection: 'row' 
    },
    wrapperSearch: {
        // margin: 'auto',
        display: 'flex',
        // justifyContent: 'center',
        alignItems: 'center',
    }
}));
