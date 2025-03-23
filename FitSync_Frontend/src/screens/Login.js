import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
    const navigate = useNavigate();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [confirmPass, setConfirmPass] = useState('');

    const handleSignUp = (e) => {
        e.preventDefault();
        console.log(email);
    }

    const handleLogIn = (e) => {
        navigate("/home");
        e.preventDefault();
        console.log(email);
    }
  
    return (
        <div className="d-flex flex-column vh-100" style={{ background: "linear-gradient(to right, #E0BBE4, #FFDFD3, #FFD3B6)" }}>
            {/* Sign up (top) */}
            <h2 className="display-5 fw-bold mt-2">Create an Account</h2>
            <form className="signup-form"onSubmit={handleSignUp}>
                    <label for="name">username</label> 
                    <input value={name} onChange={(e) => setName(e.target.value)} 
                    type="name" placeholder="Name" id="name" name="name" required/>
                    <label for="email">email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} 
                    type="email" placeholder="email@domain.com" id="email" name="email" required/>
                    <label for="password">password</label> 
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" 
                    placeholder="********" id="password" name="password" required/>
                    <label for="confirm-password">confirm password</label> 
                    <input value={confirmPass} onChange={(e) => setConfirmPass(e.target.value)} type="password" 
                    placeholder="********" id="confirm-password" name="password" required/>
                <button type="submit" onClick={() => navigate("/questionnaire")}
                className="btn btn-light shadow-sm mt-3 px-4 py-2 fs-5 border border-secondary">Sign Up</button>
            </form>
            {/* Log in (bottom) */}
            <h2 className="display-5 fw-bold mt-2">Log In</h2>
            <form className="login-form"onSubmit={handleLogIn}>
                    <label for="name">username</label> 
                    <input value={name} onChange={(e) => setName(e.target.value)} 
                    type="name" placeholder="Name" id="name" name="name" required/>
                    <label for="password">password</label> 
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" 
                    placeholder="********" id="password" name="password" required/>
                <button type="submit" onClick={() => navigate("/home")}
                className="btn btn-light shadow-sm mt-3 px-4 py-2 fs-5 border border-secondary" >Log In</button>
            </form>
        </div>
    );
};

export default Login;
