import { Link, useNavigate } from "react-router-dom";

import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { clearMessage } from "../../slices/messageSlice";
import { register } from "../../slices/authSlice";

export const Register = (props) => {
  const [loading, setLoading] = useState(false);
  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  const validationSchema = Yup.object().shape( {
    username: Yup.string()
      .test(
        "len",
        "Имя пользователя должно содержать от 3 до 20 символов!",
        (val) =>
          val && val.toString().length >= 3 && val.toString().length <= 20
      )
      .required("Это поле является обязательным!"),
    email: Yup.string()
      .email("Invalid email")
      .required("Обязательно для заполнения!"),
    password: Yup.string()
      .test(
        "len",
        "Пароль должен содержать от 6 до 40 символов!",
        (val) =>
          val && val.toString().length >= 6 && val.toString().length <= 40
      )
      .required("Это поле является обязательным!"),
  });

  const initialValues = {
    username: "",
    email: "",
    password: "",
  };

  let navigate = useNavigate();

  const handleRegister = (formValue) => {
    const { username, email, password } = formValue;

    dispatch(register({ username, email, password }))
      .unwrap()
      .then(() => {
        // props.history.push("/profile");
        // window.location.reload();
        // console.log( window.location ) 

      })
      .catch(() => {
        // setLoading(false);
      });
  };
  // if (isLoggedIn) {
  //   navigate("/auth", { replace: true });
  // }

  return (
    <div className="col-md-12 login-form">
      <div className="">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleRegister}
        >
          <Form>
            <div className="px-4 p-3">
            <div className="mb-3  form-group">
                  <label htmlFor="username">Username</label>
                  <Field name="username" type="text" className="form-control"  placeholder="User name" />
                  <ErrorMessage
                  style={{ width: "14rem" }}
                    name="username"
                    component="div"
                    className="alert alert-danger  mx-aut"
                  />
                </div>
              <div className="mb-3 form-group ">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <Field name="email" type="email" className="form-control"  placeholder="Email"/>
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

              <div className="mb-3">
                <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="dropdownCheck"
                  ></input>
                  <label
                    className="form-check-label d-flex flex-row  mr-auto"
                    htmlFor="dropdownCheck"
                  >
                    Даю согласие &nbsp;
                    <Link to="comet"> НА</Link>&nbsp;!
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                disabled={loading}
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
// <div className="mb-3">
//   <div className="form-check">
//     <input
//       type="checkbox"
//       className="form-check-input"
//       id="dropdownCheck"
//     ></input>
//     <label
//       className="form-check-label d-flex flex-row  mr-auto"
//       htmlFor="dropdownCheck"
//     >

//       Даю согласие &nbsp;
//       <Link to="comet"> НА</Link>&nbsp;!
//     </label>
//   </div>
// </div>
