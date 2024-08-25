import React, { useState, useEffect } from "react";
import "./Login.css";

function Login() {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggle = () => {
    setIsSignIn(!isSignIn);
  };

  useEffect(() => {
    const container = document.getElementById('container');
    if (isSignIn) {
      container.classList.add('sign-in');
      container.classList.remove('sign-up');
    } else {
      container.classList.add('sign-up');
      container.classList.remove('sign-in');
    }
  }, [isSignIn]);

  useEffect(() => {
    const container = document.getElementById('container');
    setTimeout(() => {
      container.classList.add('sign-in');
    }, 200);
  }, []);

  return (
    <div id="container" className="container">
      {/* FORM SECTION */}
      <div className="row">
        {/* SIGN UP */}
        <div className="col align-items-center flex-col sign-up">
          <div className="form-wrapper align-items-center">
            <div className="form sign-up">
              <div className="input-group">
                <i className="bx bxs-user" />
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-group">
                <i className="bx bx-mail-send" />
                <input type="email" placeholder="Email" />
              </div>
              <div className="input-group">
                <i className="bx bxs-lock-alt" />
                <input type="password" placeholder="Password" />
              </div>
              <div className="input-group">
                <i className="bx bxs-lock-alt" />
                <input type="password" placeholder="Confirm password" />
              </div>
              <button>Sign up</button>
              <p>
                <span>Already have an account?</span>
                <b onClick={toggle} className="pointer">
                  Sign in here
                </b>
              </p>
            </div>
          </div>
        </div>
        {/* END SIGN UP */}
        {/* SIGN IN */}
        <div className="col align-items-center flex-col sign-in">
          <div className="form-wrapper align-items-center">
            <div className="form sign-in">
              <div className="input-group">
                <i className="bx bxs-user" />
                <input type="text" placeholder="Username" />
              </div>
              <div className="input-group">
                <i className="bx bxs-lock-alt" />
                <input type="password" placeholder="Password" />
              </div>
              <button>Sign in</button>
              <p>
                <b>Forgot password?</b>
              </p>
              <p>
                <span>Don't have an account?</span>
                <b onClick={toggle} className="pointer">
                  Sign up here
                </b>
              </p>
            </div>
          </div>
          <div className="form-wrapper"></div>
        </div>
        {/* END SIGN IN */}
      </div>
      {/* END FORM SECTION */}
      {/* CONTENT SECTION */}
      <div className="row content-row">
        {isSignIn ? (
          <div className="col align-items-center flex-col">
            <div className="text sign-in">
              <h2>Welcome</h2>
            </div>
            <div className="img sign-in"></div>
          </div>
        ) : (
          <div className="col align-items-center flex-col">
            <div className="img sign-up"></div>
            <div className="text sign-up align-items-end">
              <h2>Join with us</h2>
            </div>
          </div>
        )}
      </div>
      {/* END CONTENT SECTION */}
    </div>
  );
}

export default Login;