import { useNavigate } from "react-router-dom";
import MainLogo from "../../assets/images/logostacked.png";
import Question from "../../assets/images/question-mark.png";
import { useState } from "react";

export const Login = () => {
    const user={
        username:"manishkumarji0254",
        Password:"Creative@12345"
    }

    const [inputUsername, setInputUsername] = useState("");
    const [inputPassword, setInputPassword] = useState("");
    const navigate = useNavigate();

    const handleClick = ()=> {
        if (
            inputUsername === user.username &&
            inputPassword === user.Password
        ) {
            navigate('/appDetail');
        } else {
            alert("Invalid username or password");
        }
    }

  return (
    <>
    <div className='loginPage'>
        <div className='header-sec d-flex justify-content-between align-items-center'>
            <img src={MainLogo} alt='logo'/>
            <h4 className="text-white">ImmiAccount</h4>
        </div>
        <div className="loginMain p-3">
    <div className="loginMainhead">
        <h5 className="text-white fw-medium mb-0">Login</h5>
    </div>
<div className="loginMainContent bg-white p-3">
    <h4>Login to ImmiAccount</h4>
    <div className="row">
        <div className="col-md-12">
            <div className="col-md-8">
                <div className="labelInput d-flex align-items-center mb-2">
                    <label className="d-flex align-items-start">Username <span className="text-danger">*</span></label>
                    <label>must be completed</label>
                </div>
            </div>
        </div>
        <div className="col-md-12">
            <div className="col-md-8">
                <div className="labelInput d-flex align-items-center mb-2">
                    <label className="d-flex align-items-start w-25">Username <span className="text-danger">*</span></label>
                 <div className="d-flex align-items-center gap-2 w-75">
                    <input
                        type="text"
                        placeholder="required"
                        className="w-100"
                        value={inputUsername}
                        onChange={e => setInputUsername(e.target.value)}
                    />
                    <img src={Question} data-toggle="tooltip" data-placement="top" title="Tooltip on top" alt="question"/>
                </div>
                </div>
            </div>
        </div>
        <div className="col-md-12">
        <div className="col-md-8">
                <div className="labelInput d-flex align-items-center">
                    <label className="d-flex align-items-start w-25">Password <span className="text-danger">*</span></label>
                    <div className="d-flex align-items-center gap-2 w-75">
                        <input
                            type="password"
                            placeholder="required"
                            className="w-100"
                            value={inputPassword}
                            onChange={e => setInputPassword(e.target.value)}
                        />
                        <img src={Question} data-toggle="tooltip" data-placement="top" title="Tooltip on top" alt="question"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="cmn-button">
        <button>Cancel</button>
        <button onClick={handleClick}>Login</button>
    </div>
    <p className="text-end">I have forgotten my ImmiAccount <a>username</a> or <a>password</a></p>
    <h4>Create an ImmiAccount</h4>
    <p>Create an ImmiAccount to access the Department of Home Affairs's online services.</p>
    <div className="d-flex align-items-center gap-2 labelInput"><button>Create ImmiAccount</button><img src={Question} data-toggle="tooltip" data-placement="top" title="Tooltip on top" alt="question"/></div>
</div>
        </div>
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
  )
}
