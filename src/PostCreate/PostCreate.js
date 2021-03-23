import React, { useState } from 'react';
import './PostCreate.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useHistory } from 'react-router-dom';
import { ErrorMessage, Field, Formik, Form } from 'formik';
import { postSchema } from './post.schema';
import environment from '../environments/index';
import { UserService } from '../services/user.service';
import { MapContext } from '../map-context';
import Cropper from "cropperjs";



import Map from './Map/Map';
import { mapKey } from '../keys';


function PostCreate() {

    const history = useHistory();

    const [imgPreview, setImgPreview] = useState('')

    const [north, setNorth] = useState(null);
    const [east, setEast] = useState(null);




    function previewFile(file) {
        if (!file) return;
        setImgPreview(URL.createObjectURL(file));
    }



    async function submitPost(values) {
        const data = new FormData();
        data.append('image', values.image);
        data.append('description', values.description);
        data.append('north', north);
        data.append('east', east);
        try {
            await fetch(environment.apiUrl + '/post', {
                method: 'PUT',
                body: data,
                headers: {
                    Authorization: UserService.getToken()
                }
            });
            history.push('/');
        }
        catch (err) {
            console.log(err);
        }
    }

    function cancel() {
        history.push('/')
    }

    function setMarkerPosition(north, east) {
        setNorth(north);
        setEast(east);
        console.log(north, east);
    }

    return (

        <div className="CreatePost">
            <Formik initialValues={{ file: '', description: '' }}
                validationSchema={postSchema}
                onSubmit={submitPost}>
                {({ setFieldValue, isSubmitting }) => (
                    <Form className="post-form">
                        <div className="create-box">
                            <div className="img-side">
                                <h2 className="create-headline">create a post</h2>



                                <img src={imgPreview}
                                    className="img-area" alt="" id="img-area" />




                                <label className="upload-image">
                                    <input onChange={(e) => {
                                        previewFile(e.target.files[0]);
                                        setFieldValue('image', e.target.files[0]);
                                        // handleCrop(e.target.files[0]);
                                    }}
                                        type="file"
                                        className="dont-show"
                                        name="image" />
                                    <div id="upload-button" className="upload-image btn btn-success">Upload File</div>
                                    <div className="about-box">
                                        <h3>Tell us about your adventure!</h3>
                                        <Field as="textarea" name="description" />
                                    </div>
                                </label>


                                <h3>Where Have You Been</h3>
                                <Map
                                    // onClick={mapClicked}
                                    // north={north}
                                    // east={east}
                                    className="Map"
                                    setMarkerPosition={setMarkerPosition}
                                    googleMapURL={"https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=" + mapKey.google}
                                    loadingElement={<div style={{ height: `100%`, width: `100%` }} />}
                                    containerElement={<div style={{ height: `400px`, width: `100%` }} />}
                                    mapElement={<div
                                        style={{ height: `100%`, width: `100%` }} />}
                                />

                                <ErrorMessage className="postErr" name="image" component="div" />
                                <button className="post-submit btn btn-success"
                                    id="post-submit"
                                    type="submit"
                                    disabled={isSubmitting}>
                                    {isSubmitting ? 'Posting...' : 'Post'}
                                </button>
                                <button className="cancel btn btn-danger" onClick={cancel}>
                                    Cancel
                                </button>
                            </div>

                        </div>

                    </Form>
                )}
            </Formik>

        </div>
    );
}

export default PostCreate;
