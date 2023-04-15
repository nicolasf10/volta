import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import logo from './../images/logo1.svg';
import { auth, logInWithEmailAndPassword, registerWithEmailAndPassword, signInWithGoogle } from "../firebase";
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
    background: none;
    text-transform: uppercase;
    font-family: "Sen", "sans-serif";
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    height: 50px;
    border: 1px solid black;
    border-radius: 100px;
    padding: 15px;
    transition: 0.1s ease-in all;

    &:hover {
        border: 3px solid black;
    }
`

const GoogleLogo = styled.i`
    font-size: 1.8rem;
`

function SignupPage() {
    const [name, setName] = useState("");
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
                    {/* <div className="form-floating">
                        <input onChange={(e) => setName(e.target.value)} style={{borderRadius: "10px 10px 0px 0px", borderBottom: 'none'}} value={name} type="text" className="form-control" id="floatingName" placeholder="Name"/>
                        <label for="floatingInput">Name</label>
                    </div>
                    <div className="form-floating">
                        <input onChange={(e) => setEmail(e.target.value)} style={{borderRadius: "0px"}} value={email} type="email" className="form-control" id="floatingInput" placeholder="name@example.com"/>
                        <label for="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                        <input onChange={(e) => setPassword(e.target.value)} style={{borderRadius: "0px 0px 10px 10px"}} value={password} type="password" className="form-control" id="floatingPassword" placeholder="Password"/>
                        <label for="floatingPassword">Password</label>
                    </div>
                    <button onClick={() => registerWithEmailAndPassword(name, email, password)} style={{backgroundColor: "#1746A2", border: "none", fontFamily: '"Sen", "sans-serif"', textTransform: "uppercase"}} className="w-100 btn btn-lg btn-primary" type="submit">Sign up</button> */}

                    <GoogleButton onClick={handleClick}><GoogleLogo className='fa fa-brands fa-google'></GoogleLogo><span> Sign up with Google</span></GoogleButton>

                    {/* <p className="mt-5 mb-3 text-muted">&copy; 2022</p> */}
                </form>
            </main>
        </LoginPageContainer>
    );
}

export default SignupPage;
