import React, { useState, useContext } from 'react';
import { ErrorMessage, Field, Formik, Form } from 'formik';
import { loginSchema } from './login.schema';
import { Link, useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';
import './Login.scss'
import { UserService } from '../services/user.service';
import { UserContext } from '../user-context';
import Avatar from '../Components/Avatar/Avatar'


function Login() {
    const history = useHistory();
    const { setUser } = useContext(UserContext);
    const [showError, setShowError] = useState(false);

    async function submit(values) {
        setShowError(false);
        try {
            const res = await UserService.login(values);
            const { token } = await res.json();
            Cookies.set('top-user', token, { expires: 30 });

            const user = await UserService.me();
            setUser(user);
            history.push('/');
        } catch (err) {
            setShowError(true);

        }
        // if (res.status !== 200) {
        //     return;
        // }

    };

    return (
        <div className="Login">


            <section className="form-section">
                <Formik initialValues={{ username: '', password: '' }}
                    validationSchema={loginSchema}
                    onSubmit={submit}>
                    <Form className="form">
                        <h2>Take Only Pictures</h2>
                        <div className="form-group my-3">
                            <label htmlFor="username" className="form-group">Username</label>
                            <Field className="form-control" id="username" name="username" />
                            <ErrorMessage className="errMsg" name="username" component="div" />
                        </div>
                        <div className="form-group my-3">
                            <label htmlFor="password" className="form-group">Password</label>
                            <Field type="password" className="form-control" id="password" name="password" />
                            <ErrorMessage className="errMsg" name="password" component="div" />
                        </div>
                        {showError && <p className="loginErr">Username or Password incorrect</p>}
                        <div className="form-group mt-3 mb-4">
                            <button className="btn btn-success" type="submit">Login</button>
                        </div>
                        <div className="notMember">Not Registered? <Link to="/register">Join Now!</Link></div>
                    </Form>
                </Formik>
            </section>
            <section className="why-us">
                <div className="why-text">
                    <h2>Take Only Pictures</h2>
                    <p>
                        this is where we write the reasons you should use this app! 
                        it's a really good app and it'll help you conect with like minded people and share you adventures!
                    </p>
                </div>
                <div className="logo-side">
                    <Avatar id="login-avatar" size="xl"/>
                </div>
            </section>

        </div>
    );
}

export default Login;
