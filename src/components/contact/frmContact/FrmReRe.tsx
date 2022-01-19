import { useTranslation } from 'react-i18next';
import { Formik, Field } from "formik";
import { AllImages } from '../../../helpers';
import './Frm.scss';
import { MultipleFileUploadField } from '../../dragNDrop/MultipleFileUploadField';
import { RangeSlider } from '../../rangeSlider/RangeSlider';
//import { array, object, string } from 'yup';

export const FrmReRe = () => {
    const [t] = useTranslation("global");

    return (
        <div className="Frm">
            <Formik
                initialValues={{ name: '', email: '', phone: '', budget: '', designer: '', files: [], subject: '', message: '' }}
                // validationSchema={ object({
                //     files: array(
                //         object({
                //             url: string().required(),
                //         })
                //     ),
                // })}
                validate={values => {
                    const errors = { name: '', email: '', phone: '', budget: '', designer: '', files: [], subject: '', message: '' };

                    if (!values.name)
                        errors.name = 'Required';

                    if (!values.email)
                        errors.email = 'Required';
                    else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email))
                        errors.email = 'Invalid email address';

                    if (!values.subject)
                        errors.subject = 'Required';

                    if (!values.message)
                        errors.message = 'Required';

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
                        <div className='option-wrapper'>
                            <label> Phone </label>

                            <div className='error-wrapper'>
                                <input
                                    name="phone"
                                    placeholder="### #### ####"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.phone && touched.phone}
                            </div>

                        </div>
                        <div className='option-wrapper'>
                            <label> Budget </label>

                            <div className='error-wrapper'>
                                <RangeSlider />
                                {errors.budget && touched.budget}
                            </div>

                        </div>
                        <div className='option-wrapper'>
                            <label> I need a designer </label>

                            <div className='error-wrapper'>
                                <div className='radiobutton-group' role="group" aria-labelledby="my-radio-group">
                                    <label>
                                        <Field className='radiobutton' type="radio" name="designer" value="1" />
                                        Yes
                                    </label>
                                    <label>
                                        <Field className='radiobutton' type="radio" name="designer" value="0" />
                                        No
                                    </label>
                                </div>
                                {errors.designer && touched.designer}
                            </div>

                        </div>
                        <div className='option-wrapper'>
                            <label> Reference images </label>

                            <div className='error-wrapper'>
                                <MultipleFileUploadField name='files' />
                                {errors.files && touched.files}
                            </div>

                        </div>
                        <div className='option-wrapper'>
                            <label> Subjet </label>

                            <div className='error-wrapper'>
                                <input
                                    name="subject"
                                    placeholder="Other"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.subject && touched.subject && <div className='error'> {errors.subject} </div>}
                            </div>

                        </div>
                        <div className='option-wrapper'>
                            <label> Message </label>

                            <div className='error-wrapper'>
                                <textarea
                                    name="message"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                ></textarea>
                                {errors.message && touched.message && <div className='error'> {errors.message} </div>}
                            </div>

                        </div>
                        <button type="submit" disabled={isSubmitting} onClick={ () => console.log(JSON.stringify({values,errors},null,4))}>
                            Send
                        </button>
                    </form>
                )}
            </Formik>
        </div>


    )
}

















