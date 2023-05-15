import React, {FC} from 'react';
import {
    Field,
    useField
  } from 'formik';
import style from '../../LogInForm/LogInForm.module.scss';

interface FormInputProps{
    id:string;
    name:string;
    type:string;
    placeholder: string;
    label: string;
}


const FormInput: FC <FormInputProps> = ({label,...props}) => {
    const [field, meta] = useField({ ...props});

 return ( 
   <div >
     <label className={style.label}>{label}</label>
     <Field {...field} {...props} className={meta.error && meta.touched ? style.error : ''}/>
     {meta.error && meta.touched ? <p className={style.errors}>{meta.error}</p> : ''}
   </div>
 );
};
export default FormInput;