import { ErrorMessage, Field, Formik, useFormik } from 'formik';
import { FormControl, FormGroup } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { pageComents, setComent } from '../../../slices/comentsSlace';
import * as Yup from "yup";
import { useDispatch, useSelector } from 'react-redux';
import { clearMessage } from '../../../slices/messageSlice';
import { useEffect, useState } from 'react';



export const ComentForm = (props) => {

  const id = props.id

  const [InitialValues, setInitialValues] = useState('')


  const dispatch = useDispatch();
  const { message } = useSelector((state) => state.message);

  useEffect(() => {
    dispatch(clearMessage());

  }, []);



  const validate = values => {
    const errors = { valid: false };

    if (!values) {
     
    } else if (values.length < 10 || values.length > 400) {
      errors.coment = "Коментарий должен содержать от 10 до 400 символов!";
    }
    else {
      errors.valid = true
    }

    return errors;
  };


  const handleLogin = () => {
    if(validate(InitialValues).valid){
    dispatch(setComent({ id: id, text: [{ name: 'Bee', text: InitialValues }] }))
    setInitialValues('')
  }
  
  };


  return (
    <div
      style={{ background: '#fff' }}
      className="col-md-12 shadow login-form mb-5 ">
      <div className="px-4 p-3 flex-row form-group ">
        <div

          className="d-flex  justify-content-end  flex-column ">

          <textarea

            id="coment"
            name="coment"
            type="submit"
            onChange={(e) => setInitialValues(e.target.value)}
            value={InitialValues}
          />


           {validate(InitialValues) ? (
            <>
            <div>{(validate(InitialValues)).coment}</div>

            </>
          ) : null} 

          <Button style={{ width: '7.5em' }}
            className="btn btn-primary btn-block mt-1 "
            onClick={() => handleLogin()}
            disabled={!(InitialValues.length > 10)}
            >Submit</Button>
            
        </div>

      </div>

    </div>
  );
}
