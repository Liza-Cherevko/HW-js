import { Select } from '@mui/material';
import { useField } from 'formik';
import React from 'react'

function MySelect({ name, ...restProps }) {
    const [{ value, onBlur, onChange }, { touched, error }] = useField(name);

    return (
        <Select
            fullWidth
            error={touched && !!error}
            name={name}
            {...restProps}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
        />
    );
}

export default MySelect