import './ModalEditProduct.css';
import React from 'react';
import { Formik, Form, Field } from 'formik';
import FormikControler from '../FormikControler/FormikControler';


const ModalEditProduct = ({ show, edit, handleClose, name }) => {

    return (
        <>
            <div className={show || edit ? 'formik' : 'formic_close'}>
                <div className='formik_header'>{name}</div>
                <Formik
                    initialValues={{
                        Category: '',
                        Name: '',
                        Quantity: '',
                        Price: '',
                        Description: '',
                    }}
                    onSubmit={(values) => { console.log('submit', values) }}
                >
                    {() => {
                        return (
                            <Form className='form'>
                                <label><p className='br'>Category</p>
                                    <Field name="Category" className="formik_input" />
                                </label>
                                <label><p className='br'>Name</p>
                                    <Field name="Name" className="formik_input" />
                                </label>
                                <label><p className='br'>Quantity</p>
                                    <Field name="Quantity" className="formik_input" />
                                </label>
                                <label><p className='br'>Price</p>
                                    <Field name="Price" className="formik_input" />
                                </label>
                                <FormikControler className='formik_description' control='textarea' label='Description' name='Description' />
                                <p><button className='submit_formik'>Submit</button></p>
                            </Form>
                        )
                    }}
                </Formik>
                <>
                    <button onClick={handleClose} className="cancel_formik">Cancel</button>
                </>
            </div >
        </>
    );
}

export default ModalEditProduct;