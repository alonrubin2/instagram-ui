import { ErrorMessage, Field, Formik, Form } from 'formik';
import React from 'react';
import { registerSchema } from './register.schema';
import './Register.scss';


function Register() {


    return (
        <div className="Register">
            <h2>Registration</h2>
            <Formik initialValues={{username:'', email:'', password:'', agreeToTerms: false}}
            validationSchema={registerSchema}>
                
                <Form >
                    <div className="form-group mb-2">
                        <label htmlFor="username">Username</label>
                        <Field className="form-control" id="username" name="username" />
                        <ErrorMessage name="username" component="div"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <Field type="password" className="form-control" id="password" name="password" />
                        <ErrorMessage name="password" component="div"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <Field type="email" className="form-control" id="email"  name="email"/>
                        <ErrorMessage name="email" component="div"/>
                    </div>
                    <div className="form-group form-check mb-3">
                    <Field class="form-check-input" type="checkbox" value="" id="agreeToTerms" name="agreeToTerms" />
                    <ErrorMessage name="agreeToTerms" component="div"/>
                    <label class="form-check-label" htmlFor="agreeToTerms" >Agree To Terms</label>
                    </div>
                    <div className="form-group mt-3">
                        <button className="btn btn-success">Register</button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
}

export default Register;
