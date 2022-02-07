import { useTranslation } from 'react-i18next';
import { Formik } from "formik";
import { AllImages } from '../../../helpers';
import './Frm.scss';
import { TechSelector } from '../../techSelector/TechSelector';

export const FrmStaffAugmentation = () => {
    const [t] = useTranslation("global");
    var techs: any = {
        python: false,
        angular: false,
        net: false,
        react: false,
        node: false,
        netcore: false
    }
    return (
        <div className="Frm">
            <Formik
                initialValues={{ name: '', email: '', phone: '', techs: techs, talents: '', month: '', subject: '', message: '' }}
                validate={values => {
                    const errors = { name: '', email: '', phone: '', techs: techs, talents: '', month: '', subject: '', message: '' };

                    !values.name && (errors.name = 'Required');
                    !values.email && (errors.email = 'Required');
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email) && (errors.email = 'Invalid email address');
                    !values.subject && (errors.subject = 'Required');
                    !values.message && (errors.message = 'Required');

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
                            <label> What tech? </label>

                            <div className='error-wrapper'>
                                    <TechSelector name='techs' techs={techs} />
                                    {errors.techs && touched.techs}
                                </div>

                        </div>
                        <div className='option-wrapper'>
                            <label> How many talents </label>

                            <div className='error-wrapper'>
                                <input
                                    name="talents"
                                    placeholder="#"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.talents && touched.talents && <div className='error'> {errors.talents} </div>}
                            </div>

                        </div><div className='option-wrapper'>
                            <label> Whats the length of the project? </label>

                            <div className='error-wrapper'>
                                <input
                                    name="month"
                                    placeholder="#"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.month && touched.month && <div className='error'> {errors.month} </div>}
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

















