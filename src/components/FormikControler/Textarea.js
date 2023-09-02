import React from "react";
import { Field } from "formik";

const Textarea = (props) => {
    const { label, name, ...rest } = props
    return (
        <div className='form-control'>
            <p className='br'><label htmlFor={name}>{label}</label></p>
            <Field as="textarea" id={name} name={name} {...rest} />
        </div>
    );
};

export default Textarea;