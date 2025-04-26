import { Link } from "react-router-dom";
import { useState } from "react";

import loginRegistrationBg from "../assets/images/login_registration_bg.png";
import logo from "../assets/icons/logo.svg";
import google from "../assets/icons/google.svg";
import facebook from "../assets/icons/facebook_2.svg";

const SignInPage = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };
  return (
    <main className="sign">
      <section className="auth">
        <div className="auth__inner container-alt">
          <img
            src={loginRegistrationBg}
            alt="Image with food and other"
            className="auth__image"
          />
          <div className="auth__body">
            <Link
              className="auth__logo logo"
              to="/"
              title="Home"
              aria-label="Home"
            >
              <img
                className="logo__image"
                src={logo}
                alt="Logo company"
                width="113"
                height="90"
              />
            </Link>

            <form action="/" className="sign-in">
              <div className="sign-in__inner">
                <div className="sign-in__cell sign-in__cell--wide field-auth">
                  <h2 className="sign-in__title">Login to your account!</h2>
                </div>

                <div className="sign-in__cell sign-in__cell--wide field-auth">
                  <label className="field-auth__label" htmlFor="email">
                    Email Adress
                  </label>
                  <input
                    className="field-auth__control"
                    id="email"
                    placeholder="Youraddres@email.com"
                  />
                </div>

                <div className="sign-in__cell sign-in__cell--wide field-auth">
                  <label className="field-auth__label" htmlFor="password">
                    Password
                  </label>
                  <div className="field-auth__controls">
                    <input
                      className="field-auth__control"
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      maxLength="25"
                    />
                    <button
                      className="sign-in__button-show"
                      type="button"
                      aria-label={
                        showPassword ? "Hide password" : "Show password"
                      }
                      title={showPassword ? "Hide password" : "Show password"}
                      onClick={togglePasswordVisibility}
                    >
                      {showPassword ? (
                        <svg
                          fill="#2a2a2a"
                          width="30"
                          height="30"
                          viewBox="0 0 1024 1024"
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon"
                        >
                          <path d="M396 512a112 112 0 1 0 224 0 112 112 0 1 0-224 0zm546.2-25.8C847.4 286.5 704.1 186 512 186c-192.2 0-335.4 100.5-430.2 300.3a60.3 60.3 0 0 0 0 51.5C176.6 737.5 319.9 838 512 838c192.2 0 335.4-100.5 430.2-300.3 7.7-16.2 7.7-35 0-51.5zM508 688c-97.2 0-176-78.8-176-176s78.8-176 176-176 176 78.8 176 176-78.8 176-176 176z" />
                        </svg>
                      ) : (
                        <svg
                          fill="#2a2a2a"
                          width="30"
                          height="30"
                          viewBox="0 0 1024 1024"
                          xmlns="http://www.w3.org/2000/svg"
                          className="icon"
                        >
                          <path d="M508 624a112 112 0 0 0 112-112c0-3.28-.15-6.53-.43-9.74L498.26 623.57c3.21.28 6.45.43 9.74.43zm370.72-458.44L836 122.88a8 8 0 0 0-11.31 0L715.37 232.23Q624.91 186 512 186q-288.3 0-430.2 300.3a60.3 60.3 0 0 0 0 51.5q56.7 119.43 136.55 191.45L112.56 835a8 8 0 0 0 0 11.31L155.25 889a8 8 0 0 0 11.31 0l712.16-712.12a8 8 0 0 0 0-11.32zM332 512a176 176 0 0 1 258.88-155.28l-48.62 48.62a112.08 112.08 0 0 0-140.92 140.92l-48.62 48.62A175.09 175.09 0 0 1 332 512z" />
                          <path d="M942.2 486.2Q889.4 375 816.51 304.85L672.37 449A176.08 176.08 0 0 1 445 676.37L322.74 798.63Q407.82 838 512 838q288.3 0 430.2-300.3a60.29 60.29 0 0 0 0-51.5z" />
                        </svg>
                      )}
                    </button>
                  </div>
                </div>

                <div className="sign-in__cell sign-in__cell--wide field-auth">
                  <button
                    className="sign-in__button button button-x-large"
                    type="button"
                    aria-label="User authentication"
                    title="User authentication"
                  >
                    Login to Continue
                  </button>
                </div>

                <div className="sign-in__cell sign-in__cell--wide field-auth">
                  <p className="sign-in__text">
                    Don’t have an account?{" "}
                    <a href="/signup" className="sign-in__text-link">
                      Sign up
                    </a>
                  </p>
                </div>

                <div className="sign-in__cell sign-in__cell field-auth">
                  <div className="field-auth__sign">
                    <button
                      className="sign-in__button-auth"
                      type="button"
                      aria-label="Login with Google"
                      title="Login with Google"
                    >
                      <img
                        src={google}
                        alt="Google logo"
                        className="sign-in__button-image"
                      />
                      <p className="sign-in__button-text">Login with Google</p>
                    </button>
                    <button
                      className="sign-in__button-auth"
                      type="button"
                      aria-label="Login with Facebook"
                      title="Login with Facebook"
                    >
                      <img
                        src={facebook}
                        alt="Facebook logo"
                        className="sign-in__button-image"
                      />

                      <p className="sign-in__button-text">
                        Login with Facebook
                      </p>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SignInPage;
