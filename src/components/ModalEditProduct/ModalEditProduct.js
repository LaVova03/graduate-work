import './ModalEditProduct.css';
import React from 'react';
import { Formik, Form, Field } from 'formik';
import FormikControler from '../FormikControler/FormikControler';


const ModalEditProduct = ({ add, edit, handleClose, name, setSubmitFormik, nameEdit, changeAdd }) => {
    return (
        <>
            <div className={edit ? 'formik-edit' : 'formic_edit_close' && add ? 'formik_add' : 'formik_add_close'}>
                <div className='formik_header'>{name}</div>
                <Formik
                    enableReinitialize
                    initialValues={edit ? {
                        Category: nameEdit?.Category,
                        Name: nameEdit?.Name,
                        Quantity: nameEdit?.Quantity,
                        Price: nameEdit?.Price,
                        Description: nameEdit?.Description,
                    } : {
                        Category: '',
                        Name: '',
                        Quantity: '',
                        Price: '',
                        Description: '',
                    }}

                    onSubmit={(values, { resetForm }) => {
                        setSubmitFormik(values);
                        resetForm({ values: '' });
                        changeAdd();
                    }}
                >
                    {() => {
                        return (
                            <Form className='form'>
                                <label><p className='br'>Category</p>
                                    <Field name="Category" className="formik_input" required />
                                </label>
                                <label><p className='br'>Name</p>
                                    <Field name="Name" className="formik_input" required />
                                </label>
                                <label><p className='br'>Quantity</p>
                                    <Field name="Quantity" className="formik_input" required />
                                </label>
                                <label><p className='br'>Price</p>
                                    <Field name="Price" className="formik_input" required />
                                </label>
                                <FormikControler className='formik_description' control='textarea' label='Description' name='Description' required />
                                <p><button className='submit_formik' type="submit" value="Search">Submit</button></p>
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
};

export default ModalEditProduct;