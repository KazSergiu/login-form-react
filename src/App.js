import React from "react";
import Header from "./pages/Header";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";

const App = () => {
  return (
    <Router>
      <div className="general-contanier">
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/register-page">
              <RegisterForm />
            </Route>
            <Route path="/login-page">
              <LoginForm />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
