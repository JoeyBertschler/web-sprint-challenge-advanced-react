/* 
Build a custom hook called `useForm.js`, 
and use it in your CheckoutForm component 
to control the form's stateful logic. 
*/

import {useState} from 'react'

export const useForm = (initialValue) => {
    const [success, setSuccess] = useState(false)
    const [values, setValues] = useState(initialValue)
    
    const handleChanges = e => {
        setValues({
            ...values, 
            [e.target.name]:e.target.value
        }) //why the array/ brackets tho
    }

    const handleSubmit = e => {
        e.preventDefault()
        setSuccess(true)
    }

    return [success, values, handleChanges, handleSubmit]
}