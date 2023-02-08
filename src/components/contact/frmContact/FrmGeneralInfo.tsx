import { Formik } from "formik";
import './Frm.scss';

export const FrmGeneralInfo = ({ submitFunction, ...props }) => {

    return (
        <div className="Frm">
            <Formik
                initialValues={{ name: '', email: '', phone: '', subject: '', message: '' }}
                validate={values => {
                    const errors: any = {};

                    if (!values.name)
                        errors.name = 'Required';

                    if (!values.email)
                        errors.email = 'Required';
                    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
                        errors.email = 'Invalid email address';

                    // if (!values.subject)
                    //     errors.subject = 'Required';

                    if (!values.message)
                        errors.message = 'Required';

                    return errors;
                }}
                onSubmit={(values, { setSubmitting, resetForm }) => {
                    submitFunction(values);
                    resetForm();
                    setSubmitting(false);
                }}

            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                    isSubmitting,
                }) => (
                    <form onSubmit={handleSubmit}>
                        <div className='option-wrapper'>
                            <label> Name </label>
                            <div className={!(errors.name && touched.name) ? 'wrapper' : 'wrapper error'}>
                                <input
                                    name="name"
                                    placeholder="Full name"
                                    value={values.name}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.name && touched.name && <div className='error'> {errors.name} </div>}
                            </div>
                        </div>
                        <div className='option-wrapper'>

                            <label> e-mail </label>

                            <div className={!(errors.email && touched.email) ? 'wrapper' : 'wrapper error'}>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="forexample@mail.com"
                                    value={values.email}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.email && touched.email && <div className='error'> {errors.email} </div>}
                            </div>
                        </div>

                        <div className='option-wrapper'>
                            <label> Message </label>

                            <div className={!(errors.message && touched.message) ? 'wrapper' : 'wrapper error'}>
                                <textarea
                                    name="message"
                                    value={values.message}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                ></textarea>
                                {errors.message && touched.message && <div className='error'> {errors.message} </div>}
                            </div>

                        </div>
                        
                        <button type="submit" disabled={isSubmitting} >
                            Send
                        </button>
                    </form>
                )}
            </Formik>
        </div>


    )
}

















