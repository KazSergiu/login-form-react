import React from "react";
import { Form, Field } from "react-final-form";
import Flip from "react-reveal/Flip";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../usersState/user";

const LoginForm = () => {
  
  const history = useHistory();
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    if (user.email === e.loginEmail && user.password === e.loginPassword) {
      dispatch(
        login({
          logedIn: true,
        })
      );
    } else {
      return;
    }
    history.push("/");
  };

  const validate = (e) => {
    const errors = {};
    if (!e.loginEmail) {
      errors.loginEmail = "Enter Email";
    } else if (user.email !== e.loginEmail) {
      errors.loginEmail = "Enter Valid Email";
    }
    if (!e.loginPassword) {
      errors.loginPassword = "Enter Password";
    } else if (user.password !== e.loginPassword) {
      errors.loginPassword = "Enter Valid Password";
    }
    return errors;
  };

  return (
    <div className="register-form-container">
        <Form
          onSubmit={onSubmit}
          validate={validate}
          render={({ handleSubmit }) => (
            <form onSubmit={handleSubmit}>
              <h2>Log In</h2>
              <div className="inputs-container">
                <Field name="loginEmail">
                  {({ input, meta }) => (
                    <Flip bottom cascade>
                      <div className="input-block">
                        <label>Email</label>
                        <input
                          type="email"
                          {...input}
                          placeholder="Enter Email"
                          required
                        />
                        {meta.touched && meta.error && <p>{meta.error}</p>}
                      </div>
                    </Flip>
                  )}
                </Field>

                <Field name="loginPassword">
                  {({ input, meta }) => (
                    <Flip bottom cascade>
                      <div className="input-block">
                        <label>Password</label>
                        <input
                          type="password"
                          {...input}
                          placeholder="Enter Password"
                          required
                        />
                        {meta.touched && meta.error && <p>{meta.error}</p>}
                      </div>
                    </Flip>
                  )}
                </Field>
              </div>
              <button type="submit">Sign In</button>
            </form>
          )}
        />
    </div>
  );
};

export default LoginForm;
