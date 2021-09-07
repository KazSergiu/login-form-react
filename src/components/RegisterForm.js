import React from "react";
import { Form, Field } from "react-final-form";
import Flip from "react-reveal/Flip";
import { useDispatch } from "react-redux";
import { register } from "../usersState/user";
import { useHistory } from "react-router-dom";

const RegisterForm = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    dispatch(
      register({
        email: e.email,
        password: e.password,
        confirmPassword: e.confirmPassword,
        firstName: e.firstName,
        lastName: e.lastName,
      })
    );
    history.push("/login-page");
  };

  const validate = (e) => {
    const errors = {};
    if (!e.email) {
      errors.email = "Enter Email";
    }
    if (!e.password) {
      errors.password = "Enter Password";
    }
    if (!e.confirmPassword) {
      errors.confirmPassword = "Confirm Password";
    }
    if (e.password && e.password !== e.confirmPassword) {
      errors.confirmPassword = "Passwords don't match";
    }
    if (!e.firstName) {
      errors.firstName = "Enter First Name";
    }
    if (!e.lastName) {
      errors.lastName = "Enter Last Name";
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
            <h2>Please fill in this form to create an account</h2>
            <div className="inputs-container">
              <Field name="email">
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

              <Field name="password">
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

              <Field name="confirmPassword">
                {({ input, meta }) => (
                  <Flip bottom cascade>
                    <div className="input-block">
                      <label>Confirm Password</label>
                      <input
                        type="password"
                        {...input}
                        placeholder="Confirm Password"
                        required
                      />
                      {meta.touched && meta.error && <p>{meta.error}</p>}
                    </div>
                  </Flip>
                )}
              </Field>

              <Field name="firstName">
                {({ input, meta }) => (
                  <Flip bottom cascade>
                    <div className="input-block">
                      <label>First Name</label>
                      <input
                        type="text"
                        {...input}
                        placeholder="First Name"
                        required
                      />
                      {meta.touched && meta.error && <p>{meta.error}</p>}
                    </div>
                  </Flip>
                )}
              </Field>

              <Field name="lastName">
                {({ input, meta }) => (
                  <Flip bottom cascade>
                    <div className="input-block">
                      <label>Last Name</label>
                      <input
                        type="text"
                        {...input}
                        placeholder="Last Name"
                        required
                      />
                      {meta.touched && meta.error && <p>{meta.error}</p>}
                    </div>
                  </Flip>
                )}
              </Field>
            </div>
            <button type="submit">Register</button>
          </form>
        )}
      />
    </div>
  );
};

export default RegisterForm;
