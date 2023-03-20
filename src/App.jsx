import React, { useState } from "react";
import ReactDOM from "react-dom";
import kiwifylogo from "./kiwifylogo.png"
import "./styles.css";

function App() {
  // React States
  const [errorMessages, setErrorMessages] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  // User Login info
  const database = [
    {
      username: "amirsayab@gmail.com",
      password: "pass1"
    },
    {
      username: "hammyosh@gmail.com",
      password: "pass2"
    }
  ];

  const errors = {
    uname: "invalid E-mail address",
    pass: "invalid password"
  };

  const handleSubmit = (event) => {
    //Prevent page reload
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    // Find user login info
    const userData = database.find((user) => user.username === uname.value);

    // Compare user info
    if (userData) {
      if (userData.password !== pass.value) {
        // Invalid password
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
      }
    } else {
      // Username not found
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  };

  // Generate JSX code for error message
  const renderErrorMessage = (name) =>
    name === errorMessages.name && (
      <div className="error">{errorMessages.message}</div>
    );

  // JSX code for login form
  const renderForm = (
    <>
    <div className="container">
      <div className="head-container">
        <img src={kiwifylogo} alt="kiwify-green-logo" />
        <h2>Entrar na sua Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed consequuntur eum voluptatem?</h2>
        <p>Ou <a href="https://dashboard.kiwify.com.br/signup">fazer cadastro</a></p>
      </div>
      <div className="form">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label>E-mail </label>
            <input type="email" name="uname" required />
            {renderErrorMessage("uname")}
          </div>
          <div className="input-container">
            <label>Password </label>
            <input type="password" name="pass" required />
            {renderErrorMessage("pass")}
          </div>
          <div className="button-container">
            <input type="submit" />
          </div>
        </form>
      </div>
    </div>
    </>

  );

  return (
    <div className="app">
      <div className="login-form">
        {isSubmitted ? <div>User is successfully logged in</div> : renderForm}
      </div>
    </div>
  );
}

export default App;