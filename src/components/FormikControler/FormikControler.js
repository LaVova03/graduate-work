import React from "react";
import InputTextarea from './Input';
import Textarea from "./Textarea";

const FormikControler = (props) => {
    const { control, ...rest } = props
    switch (control) {
        case 'input':
            return <InputTextarea {...rest} />
        case 'textarea': return <Textarea {...rest} />
        default: return null
    };
};

export default FormikControler;