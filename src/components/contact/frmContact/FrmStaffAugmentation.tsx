import { Formik } from "formik";
import './Frm.scss';
import { TechSelector } from '../../techSelector/TechSelector';

export const FrmStaffAugmentation = ({ submitFunction, ...props }) => {
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
                    const errors: any = {};

                    !values.name && (errors.name = 'Required');
                    !values.email && (errors.email = 'Required');
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email) && (errors.email = 'Invalid email address');
                    // !values.subject && (errors.subject = 'Required');
                    !values.message && (errors.message = 'Required');

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
                                    value={values.email}
                                    placeholder="forexample@mail.com"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.email && touched.email && <div className='error'> {errors.email} </div>}
                            </div>
                        </div>
                        {/* <div className='option-wrapper'>
                            <label> Phone </label>

                            <div className={!(errors.phone && touched.phone) ? 'wrapper' : 'wrapper error'}>
                                <input
                                    name="phone"
                                    value={values.email}
                                    placeholder="### #### ####"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.phone && touched.phone}
                            </div>

                        </div> */}
                         <div className='option-wrapper'>
                            <label> What tech? </label>

                            <div className={!(errors.techs && touched.techs) ? 'wrapper' : 'wrapper error'}>
                                <TechSelector name='techs' techs={techs} />
                                {errors.techs && touched.techs}
                            </div>

                        </div> 
                        {/* <div className='option-wrapper'>
                            <label> How many talents </label>

                            <div className={!(errors.talents && touched.talents) ? 'wrapper' : 'wrapper error'}>
                                <input
                                    name="talents"
                                    placeholder="#"
                                    value={values.talents}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.talents && touched.talents && <div className='error'> {errors.talents} </div>}
                            </div>

                        </div><div className='option-wrapper'>
                            <label> Whats the length of the project? </label>

                            <div className={!(errors.month && touched.month) ? 'wrapper' : 'wrapper error'}>
                                <input
                                    name="month"
                                    placeholder="#"
                                    value={values.month}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.month && touched.month && <div className='error'> {errors.month} </div>}
                            </div>

                        </div> */}
                        {/* <div className='option-wrapper'>
                            <label> Subject </label>

                            <div className={!(errors.subject && touched.subject) ? 'wrapper' : 'wrapper error'}>
                                <input
                                    name="subject"
                                    placeholder="Other"
                                    value={values.subject}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {errors.subject && touched.subject && <div className='error'> {errors.subject} </div>}
                            </div>

                        </div> */}
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
                        <button type="submit" disabled={isSubmitting}>
                            Send
                        </button>
                    </form>
                )}
            </Formik>
        </div>


    )
}

















