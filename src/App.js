import React from "react";
import Header from "./pages/Header";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import LogoutMessage from "./components/LogoutMessage";
import { useSelector } from "react-redux";
import HaveAnAccount from "./components/HaveAnAccount";

const App = () => {
  const user = useSelector((state) => state.user.value);

  return (
    <Router>
      <main className="general-contanier">
        <Header />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <HomePage />
            </Route>
            <Route path="/register-page">
              {!user.logedIn ? <RegisterForm /> : <HaveAnAccount />}
            </Route>
            <Route path="/login-page">
              {!user.logedIn ? <LoginForm /> : <LogoutMessage />}
            </Route>
          </Switch>
        </div>
      </main>
    </Router>
  );
};

export default App;
