import React from 'react';
import {
    InputAdornment,
    TextField,
} from '@material-ui/core';

const renderTextField = ({
    label,
    input,
    meta: { touched, invalid, error },
    ...custom
}) => {
    return (
        <TextField
            InputProps={{
                startAdornment: (
                    <InputAdornment>
                        <custom.icons />
                    </InputAdornment>
                )
            }}
            label= { label }
            error= { touched && invalid }
            helperText= { touched && error}
            { ...input }
            { ...custom }
        />
    )
}

export {
    renderTextField,
}