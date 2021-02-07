import { ErrorMessage, Field, Formik, Form } from 'formik';
import React from 'react';
import { registerSchema } from './register.schema';
import './Register.scss';


function Register() {


    return (
        <div className="Register">
            <h2>Register Now!</h2>

            <Formik initialValues={{ username: '', email: '', password: '', agreeToTerms: false }}
                validationSchema={registerSchema}>

                <Form >
                <img classname="register-img" src=" https://scontent.ftlv6-1.fna.fbcdn.net/v/t31.0-8/15304582_10154839893158724_8612267603893994913_o.jpg?_nc_cat=102&ccb=2&_nc_sid=e3f864&_nc_ohc=BdwQM0-FWD4AX_tZBEc&_nc_ht=scontent.ftlv6-1.fna&oh=4582d555a24c37996421bc21519446b5&oe=60406BC4" alt="" />
                    <div className="mb-2">
                        <label htmlFor="username" className="form-group">Username</label>
                        <Field className="form-control" id="username" name="username" />
                        <ErrorMessage className="errMsg" name="username" component="div" />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="password" className="form-group">Password</label>
                        <Field type="password" className="form-control" id="password" name="password" />
                        <ErrorMessage className="errMsg" name="password" component="div" />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="email" className="form-group">Email</label>
                        <Field type="email" className="form-control" id="email" name="email" />
                        <ErrorMessage className="errMsg" name="email" component="div" />
                    </div>
                    <div className="form-group form-check mb-3 mt-3">
                        <Field class="form-check-input" type="checkbox" value="" id="agreeToTerms" name="agreeToTerms" />
                        <label class="form-check-label" htmlFor="agreeToTerms" >Agree To Terms</label>
                        <ErrorMessage className="errMsg" name="agreeToTerms" component="div" />

                    </div>
                    <div className="form-group mt-3 mb-4">
                        <button className="btn btn-success">Register</button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
}

export default Register;


