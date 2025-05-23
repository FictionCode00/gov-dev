import { useNavigate } from "react-router-dom";
import MainLogo from "../../assets/images/logostacked.png";
import Question from "../../assets/images/question-mark.png";
import ErrorIcon from "../../assets/images/errorIcon.png";
import { useState } from "react";

export const Login = () => {
  const user = {
    username: "manishkumarji0254@gmail.com",
    Password: "Creative@12345",
  };

  const [inputUsername, setInputUsername] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [error, setError] = useState<null | string>(null);
  const navigate = useNavigate();

  const handleClick = () => {
    // Reset error state
    setError(null);

    // Validate inputs
    const trimmedUsername = inputUsername.trim();
    const isUsernameEmpty = trimmedUsername === "";
    const isPasswordEmpty = inputPassword === "";

    // Handle empty fields first
    if (isUsernameEmpty && isPasswordEmpty) {
      setError("user_pass_empty");
      return;
    }
    if (isUsernameEmpty) {
      setError("username_empty");
      return;
    }
    if (isPasswordEmpty) {
      setError("pass_empty");
      return;
    }

    // Validate credentials
    if (trimmedUsername === user.username && inputPassword === user.Password) {
      navigate("/appDetail");
    } else {
      setError("wrong_creds");
    }
  };

  return (
    <>
      <div className="loginPage">
        <div className="header-sec d-flex justify-content-between align-items-center">
          <img src={MainLogo} alt="logo" />
          <h4 className="text-white">ImmiAccount</h4>
        </div>
        <div className="loginMain p-3">
          <div className="loginMainhead">
            <h5 className="text-white fw-medium mb-0">Login</h5>
          </div>
          <div className="loginMainContent bg-white p-3">
            {error && (
              <div className="errorMsg mb-3">
                <h5
                  className="text-white mb-0 d-flex align-items-center gap-2"
                  style={{ backgroundColor: "#c41a1f", fontSize: "16px" }}
                >
                  <img
                    src={ErrorIcon}
                    alt="error"
                    style={{ width: "11px", height: "11px" }}
                  />
                  An error has occurred
                </h5>
                <div className="p-2">
                  {error == "username_empty" ? (
                    <p className="errorMsg-content mb-1">
                      Please enter username
                    </p>
                  ) : error == "pass_empty" ? (
                    <p className="errorMsg-content mb-1">
                      Please enter password
                    </p>
                  ) : error == "user_pass_empty" ? (
                    <>
                      <p className="errorMsg-content mb-1">
                        Please enter username
                      </p>
                      <p className="errorMsg-content mb-1">
                        Please enter password
                      </p>
                    </>
                  ) : error == "wrong_creds" ? (
                    <>
                      <p className="errorMsg-content mb-1">
                        Login failed: Invalid username or password
                      </p>
                      <p className="errorMsg-content mb-1">
                        Please Check the username and password you have entered.
                      </p>
                      <p className="errorMsg-content mb-1">
                        Note: Password are case sensitive. Check that your cAPS
                        LoCK is off.
                      </p>
                    </>
                  ) : null}
                </div>
              </div>
            )}
            <h4>Login to ImmiAccount</h4>
            <div className="row">
              <div className="col-md-12">
                <div className="col-md-8">
                  <div className="labelInput d-flex align-items-center mb-2">
                    <label className="d-flex align-items-start">
                      Username <span className="text-danger">*</span>
                    </label>
                    <label>must be completed</label>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="col-md-8">
                <div className="labelInput d-flex align-items-center mb-2">
                  <label className="d-flex align-items-start w-25">
                    Username <span className="text-danger">*</span>
                  </label>
                  <div className="d-flex align-items-start gap-2 w-75">
                    <div style={{ width: "520px" }}>
                      {" "}
                      <input
                        type="text"
                        placeholder="required"
                        className={(error == "user_pass_empty" ||
                            error == "username_empty") ?'err-class':''}
                        value={inputUsername}
                        style={{ width: "100%", height: "22px" }}
                        onChange={(e) => setInputUsername(e.target.value)}
                      />
                      {(error == "user_pass_empty" ||
                        error == "username_empty") && (
                        <div className="fieldError">
                          <span>
                            <img
                              className="errorBefore"
                              src={ErrorIcon}
                              alt="error"
                            />
                            Please enter username.{" "}
                          </span>
                        </div>
                      )}
                    </div>
                    <img
                      src={Question}
                      data-toggle="tooltip"
                      className="mt-1"
                      data-placement="top"
                      title="Tooltip on top"
                      alt="question"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-12">
              <div className="col-md-8">
                <div className="labelInput d-flex align-items-center">
                  <label className="d-flex align-items-start w-25">
                    Password <span className="text-danger">*</span>
                  </label>
                  <div className="d-flex align-items-start gap-2 w-75">
                    <div style={{ width: "520px" }}>
                      <input
                        type="password"
                        placeholder="required"
                        value={inputPassword}
                        className={(error == "user_pass_empty" ||
                            error == "pass_empty") ?'err-class':''}
                        style={{ width: "100%", height: "22px" }}
                        onChange={(e) => setInputPassword(e.target.value)}
                      />
                      {(error == "user_pass_empty" ||
                        error == "pass_empty") && (
                        <div className="fieldError">
                          <span>
                            <img
                              className="errorBefore"
                              src={ErrorIcon}
                              alt="error"
                            />
                            Please enter Password.{" "}
                          </span>
                        </div>
                      )}
                    </div>
                    <img
                      src={Question}
                      data-toggle="tooltip"
                      className="mt-1"
                      data-placement="top"
                      title="Tooltip on top"
                      alt="question"
                    />
                  </div>
                </div>
              </div>
            </div>
         
          <div className="cmn-button">
            <button>Cancel</button>
            <button onClick={handleClick}>Login</button>
          </div>
          <p className="text-end">
            I have forgotten my ImmiAccount <a>username</a> or <a>password</a>
          </p>
          <h4>Create an ImmiAccount</h4>
          <p>
            Create an ImmiAccount to access the Department of Home Affairs's
            online services.
          </p>
          <div className="d-flex align-items-center gap-2 labelInput">
            <button>Create ImmiAccount</button>
            <img
              src={Question}
              data-toggle="tooltip"
              data-placement="top"
              title="Tooltip on top"
              alt="question"
            />
          </div>
        </div>
        </div>
        {/* </div> */}
        <div className="footer-sec">
          <ul>
            <li>
              <a>Accessibility</a>
            </li>
            <li>
              <a>Copyright & Disclaimer</a>
            </li>
            <li>
              <a>Online Security</a>
            </li>
            <li>
              <a>Privacy</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
