import { useTranslation } from 'react-i18next';
import { Formik } from "formik";
import { AllImages } from '../../../helpers';
import './Frm.scss';

export const FrmNewApp = () => {
    const [t] = useTranslation("global");

    return (
        <div className="Frm">
            <Formik
                initialValues={{ name: '', email: '' }}
                validate={values => {
                    const errors = { name: '', email: '' };

                    if (!values.name)
                        errors.name = 'Required';


                    if (!values.email)
                        errors.email = 'Required';
                    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
                        errors.email = 'Invalid email address';

                    return errors;
                }}
                onSubmit={(values, { setSubmitting }) => {
                    setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                    }, 400);
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
                    /* and other goodies */
                }) => (
                    <form onSubmit={handleSubmit}>
                        <div className='option-wrapper'>
                            <label> Name </label>
                            <div className='error-wrapper'>
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

                            <div className='error-wrapper'>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="forexample@mail.com"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.email && touched.email && <div className='error'> {errors.email} </div>}
                            </div>
                        </div>

                        <button type="submit" disabled={isSubmitting}>
                            Submit
                        </button>
                    </form>
                )}
            </Formik>
        </div>


    )
}

















