import * as Yup from 'yup';


export const SignUpSchema = Yup.object().shape({
    name: Yup
    .string()
    .required('Required')
    .min(2, 'Minimum name\'s length is 2 letters')
    .max(30, 'Maximum name\'s length is 30 letters'),
    email: Yup
    .string()
    .email('Please enter a valid email')
    .required('Required'),
    password: Yup
    .string()
    .required('Required')
    .min(2,'Minimum password\'s length is 2 letters'),
    confirmPassword: Yup
    .string()
    .required('Required')
    .oneOf([Yup.ref('password')], 'Password mismatch')
});

