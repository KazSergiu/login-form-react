import React from "react";
import { Form, Field } from "react-final-form";
import Flip from "react-reveal/Flip";

const LoginForm = () => {
  const onSubmit = (e) => {
    debugger;
  };
  const validate = (e) => {
    const errors = {};
    if (!e.loginEmail) {
      errors.loginEmail = "Enter Email";
    }
    if (!e.loginPassword) {
      errors.loginPassword = "Enter Password";
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
