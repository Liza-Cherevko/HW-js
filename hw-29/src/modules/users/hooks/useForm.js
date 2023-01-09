// import React, { useEffect, useState } from 'react';

// export default  function useForm(initialValues){
//     const [values, setValues] = useState(initialValues)
//     const [errors, setErrors] = useState({})
//     const [touched, setTouched] = useState({})
//     const [isValid, setIsValid] = useState(true)
//     const EMAIL_REGEXP =
//     /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
  
//     useEffect(() => {
//     setValues(initialValues);
//     validate(initialValues);
//     setTouched({})
//   }, [initialValues])

// function onInputBlur(e){
//     setTouched({...touched, [e.target.name]: true})
// }
  
//     function onInputChange(e) {
//         const newValues={...values, [e.target.name]:e.target.value};
//         setValues(newValues)
//         setTouched({ ...touched, [e.target.name]: true })
//         validate(newValues)
//     }


//     return {values, errors, touched, isValid, onInputBlur, onInputChange}
// }

import { useEffect, useState } from 'react';

//{
//     validate
// }

export default function useForm(initialValues, config) {
    // ===
    const [values, setValues] = useState(initialValues);
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});

    useEffect(() => {
        setValues(initialValues);
        validate(initialValues);
        setTouched({});
    }, [initialValues]);

    function onInputChange(e) {
        const newValues = { ...values, [e.target.name]: e.target.value };

        setValues(newValues);

        validate(newValues);
    }

    function onInputBlur(e) {
        setTouched({ ...touched, [e.target.name]: true });
    }

    function validate(values) {
        const validationErrors = config.validate(values);
        setErrors(validationErrors);
    }

    return {
        values,
        errors,
        touched,
        isValid: !Object.keys(errors).length,
        onInputBlur,
        onInputChange,
    };
}