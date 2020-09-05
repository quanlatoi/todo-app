import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(theme =>({
    root: {
        padding: '10px 15px',
        display: 'flex',
        flexDirection: 'row',
        boxShadow: '2px 2px 4px #a7a7a7'
    },
    wrapperSearch: {
        // margin: 'auto',
        display: 'flex',
        // justifyContent: 'center',
        alignItems: 'center',
    }
}));
