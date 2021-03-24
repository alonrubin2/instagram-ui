import React, { useState, useContext, useMemo } from 'react';
import { ErrorMessage, Field, Formik, Form } from 'formik';
import { UserService } from '../services/user.service';
import { useHistory } from 'react-router-dom';
import { userEditSchema } from './EditProfile.schema';
import { UserContext } from '../user-context';

import Avatar from '../Components/Avatar/Avatar';
import './EditProfile.scss';

function EditProfile() {

    const history = useHistory();
    const { user, setUser } = useContext(UserContext);

    const [value, setValue] = useState('');
    const [imgPreview, setImgPreview] = useState('')

    function previewFile(file) {
        if (!file) return;
        setImgPreview(URL.createObjectURL(file));
    }

    async function editProfile(values) {

        try {
            const edditedUser = await UserService.edit(values);
            console.log(edditedUser);
            setUser(edditedUser);
            history.push(`/user/${edditedUser.username}`);
        }
        catch (err) {
            console.log(err);
        }
    }

    function cancel() {
        history.push('/')
    }

    const counter = useMemo(() => {
        return value.length;
    }, [value]);


    return (
        <div className="EditProfile">
            <Formik initialValues={{ username: '', email: '', bio: '' }}
                validationSchema={userEditSchema}
                onSubmit={editProfile}>
                {({ setFieldValue, isSubmitting }) => (
                    <Form className="form">
                        <div className="green-sash"></div>
                        <h2>Edit your Profile</h2>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <Field className="form-control" id="username" name="username" placeholder={user.username} />
                            <ErrorMessage className="errMsg" name="username" component="div" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <Field type="email" className="form-control" id="email" name="email" placeholder={user.email} />
                            <ErrorMessage className="errMsg" name="email" component="div" />
                        </div>

                        <div className="form-group">
                            <label htmlFor="bio">Bio</label>
                            <Field maxLength='200'
                                // onChange={(e) => {
                                // setCounter(counter+1);
                                // setValue(e.target.value)}}
                                type="text" className="form-control" id="bio" name="bio" placeholder="Tell us about yourself"
                            //  value={value}
                            />
                            <small>{200 - counter} keys</small>
                            <ErrorMessage className="errMsg" name="bio" component="div" />
                        </div>

                        <img src={imgPreview} size="lg" className="avatar-area" alt="" ></img>
                        <label className="file-upload-btn">
                            <input onChange={(e) => {
                                previewFile(e.target.files[0]);
                                setFieldValue('image', e.target.files[0]);
                            }}
                                type="file"
                                className="dont-show"
                                name="image" />

                            <div>Upload File</div>
                        </label>

                        <div className="form-group mt-3 mb-4 btn-box" >
                            <button className="cancel btn btn-danger" onClick={cancel}>
                                Cancel
                                </button>
                            <button disabled={isSubmitting} className="btn btn-success" type="submit">
                                {isSubmitting ? 'Updating...' : 'Update'}
                            </button>

                        </div>
                    </Form>
                )}

            </Formik>
        </div>
    );
}

export default EditProfile;
