import React, { useState } from 'react'

export const useForm = (initialValues) => {

    const [ values, setValues ] = useState(initialValues);


    const handleInputChange = e => {
        setValues({
            ...values,
            search: e.target.value.toLowerCase()
        });
    }

    const reset = () => {
        setValues(initialValues);
    }

    return [ handleInputChange, values, reset ];
}
