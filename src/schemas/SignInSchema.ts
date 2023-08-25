import * as Yup from 'yup';


export const SignInSchema = Yup.object().shape({
    email: Yup.string().email('Please enter a valid email').required('Required'),
    password: Yup.string().required('Required')
});

