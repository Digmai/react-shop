import { Link, useNavigate } from "react-router-dom";

import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { clearMessage } from "../../slices/messageSlice";
import { login } from "../../slices/authSlice";

export const Login = (props) => {


  const [loading, setLoading] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);


  const validationSchema = Yup.object().shape({

      email: Yup.string().email('Invalid email').required('Обязательно для заполнения!'),
    password: Yup.string()
      .test(
        "len",
        "Пароль должен содержать от 6 до 40 символов!",
        (val) =>
          val &&
          val.toString().length >= 3 &&
          val.toString().length <= 40
      )
      .required("This field is required!"),
  });


  const initialValues = {
    email: '',
    password: '',
  };


  let navigate = useNavigate();

  const handleLogin = (formValue) => {
    const { email, password } = formValue;
    setLoading(true);
    dispatch(login({ email, password }))
      .unwrap()
      // .then(() => {
      //   props.history.push("/");
      //   window.location.reload();
      // })
      .catch(() => {
        setLoading(false);
      });
  };
  // if (isLoggedIn) {
  //   navigate("/", { replace: true });
  // }

  return (
    <div className="col-md-12 login-form">
      <div className="">

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
         
        >
          
          <Form >
            <div className="px-4 p-3">
            <div  className="mb-3 form-group " >
              <label htmlFor="email" 
              className="form-label"
              >
                Email address
              </label>
              <Field
            
              name="email"
              type="text"
              className="form-control"
                
                id="exampleDropdownFormEmail1"
                placeholder="email@example.com"
              ></Field>
              
              <ErrorMessage
               style={{ width: "14rem" }}
                name="email"
                component="div"
                className="alert alert-danger mx-auto"
              />
            </div>
            <div className="mb-3 form-group">
              <label
               htmlFor="password"
                className="form-label"
                type="password"
              >
                Password
              </label>
              <Field
              name="password"
                type="password"
                autoComplete="oof"
                className="form-control"
                id="exampleDropdownFormPassword1"
                placeholder="Password"
         
              ></Field>
              <ErrorMessage
              style={{ width: "14rem" }}
                name="password"
                component="div"
                className="alert alert-danger mx-auto"
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary btn-block"
              // disabled={loading}
            >
              {/* {loading && (
                <span className="spinner-border spinner-border-sm"></span>
              )} */}
              <span>Login</span>
            </button>
            </div>
          </Form>
        </Formik>
      </div>
      {message && (
        <div className="form-group">
          <div className="alert alert-danger" role="alert">
            {message}
          </div>
        </div>
      )}
    </div>
  );
};
