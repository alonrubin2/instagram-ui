import { ErrorMessage, Field, Formik, Form } from 'formik';
import { registerSchema } from './register.schema';
import { useHistory } from 'react-router-dom';


import React from 'react';

import './Register.scss';
import { UserService } from '../services/user.service';



function Register(props) {

    const history = useHistory();

    async function submit(values) {
        try {
            await UserService.create(values);
            history.push('/login');
        }
        catch (err) {
            console.log('failure');
        }
    }


    return (
        <div className="Register">


            <div className="body-box">
                {/* <div className="text-box">
                    <h3>show us your hiking and nature highs with T.O.P!</h3>
                    <p className="text">
                        Take Only Pictures [T.O.P] is  the best place for your hiking and nature shots!
                        Connect with other hikers and travlers and share your experiences. Our goal is to
                        show the beauty of nature, and the hardships and joy that come with the best Views,
                        Valleys and Vistas!
                        Join now and share your Adventures!
                    </p>
                </div> */}

                <Formik initialValues={{ username: '', email: '', password: '', agreeToTerms: false }}
                    validationSchema={registerSchema}
                    onSubmit={submit}>

                    <Form className="form">
                        <div className="green-sash"></div>
                        <h2>Register Now!</h2>
                        <div className="form-group">
                            <label htmlFor="username" >Username</label>
                            <Field className="form-control" id="username" name="username" />
                            <ErrorMessage className="errMsg" name="username" component="div" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password" >Password</label>
                            <Field type="password" className="form-control" id="password" name="password" />
                            <ErrorMessage className="errMsg" name="password" component="div" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" >Email</label>
                            <Field type="email" className="form-control" id="email" name="email" />
                            <ErrorMessage className="errMsg" name="email" component="div" />
                        </div>
                        <div className="form-group form-check mb-3 mt-3">
                            <Field className="form-check-input" type="checkbox" id="agreeToTerms" name="agreeToTerms" />
                            <label className="form-check-label" htmlFor="agreeToTerms" >Agree To Terms</label>
                            <ErrorMessage className="errMsg" name="agreeToTerms" component="div" />

                        </div>
                        <div id="btn-div" className="form-group mt-3 mb-4">
                            <button id="register-btn"className="btn btn-success" type="submit">Register</button>
                        </div>
                    </Form>
                </Formik>
            </div>
        </div>
    );
}

export default Register;


