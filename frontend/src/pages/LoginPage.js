import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import logo from './../images/logo1.svg';
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";


const LoginPageContainer = styled.div`
    height: 100vh;
    display: flex;
    align-items: center;
`

const VoltaLogo = styled.img`
    height: 50px;
    margin-bottom: 25px;
`

const GoogleButton = styled.button`
    margin-top: 25px;
    border: none;
    background: none;
    text-transform: uppercase;
    font-family: "Sen", "sans-serif";
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
`

const GoogleLogo = styled.i`
    font-size: 1.8rem;
`

function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate();
    
    useEffect(() => {
        if (loading) {
          // maybe trigger a loading screen
          return;
        }
        if (user) {
            console.log("Logged in")
            navigate("/")
        };
      }, [user, loading]);
    
      function handleClick(e) {
        e.preventDefault();
        signInWithGoogle();
      }

    return (
        <LoginPageContainer>
            <main className="form-signin w-100 m-auto">
                <form>
                    <Link to="/"><VoltaLogo clasName="mb-4" src={logo} alt="Volta"/></Link>
                    <div className="form-floating">
                        <input required onChange={(e) => setEmail(e.target.value)} value={email} type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input required onChange={(e) => setPassword(e.target.value)} value={password} type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                        <label for="floatingPassword">Password</label>
                    </div>
                    <button onClick={() => logInWithEmailAndPassword(email, password)} style={{backgroundColor: "#1746A2", border: "none", fontFamily: '"Sen", "sans-serif"', textTransform: "uppercase"}} className="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>

                    <GoogleButton onClick={handleClick}><GoogleLogo className='fa fa-brands fa-google'></GoogleLogo><span> Sign in with Google</span></GoogleButton>

                    {/* <p className="mt-5 mb-3 text-muted">&copy; 2022</p> */}
                </form>
            </main>
        </LoginPageContainer>
    );
}

export default LoginPage;
