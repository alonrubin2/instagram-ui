import * as yup from 'yup';


export const postSchema = yup.object().shape({
    image: yup.mixed()
          .required('image is required'),
    description: yup.string()
                 .max(2000, "description is too long")
});