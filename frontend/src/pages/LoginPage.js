import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from './../images/logo1.svg';


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

function LoginPage(props) {
    const [status, setStatus] = useState(props.status);

    
    return (
        <LoginPageContainer>
            <main className="form-signin w-100 m-auto">
                <form>
                    <VoltaLogo clasNames="mb-4" src={logo} alt="Volta"/>
                    <div className="form-floating">
                    <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com"/>
                    <label for="floatingInput">Email address</label>
                    </div>
                    <div className="form-floating">
                    <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
                    <label for="floatingPassword">Password</label>
                    </div>

                    <div className="checkbox mb-3">
                    <label>
                        <input type="checkbox" value="remember-me"/> Remember me
                    </label>
                    </div>
                    <button style={{backgroundColor: "#1746A2", border: "none", fontFamily: '"Sen", "sans-serif"', textTransform: "uppercase"}} className="w-100 btn btn-lg btn-primary" type="submit">Sign {status == 'login' ? <>in</> : <>up</>}</button>

                    <GoogleButton><GoogleLogo className='fa fa-brands fa-google'></GoogleLogo><span> Sign {status == 'login' ? <>in</> : <>up</>} with Google</span></GoogleButton>

                    {/* <p className="mt-5 mb-3 text-muted">&copy; 2022</p> */}
                </form>
            </main>
        </LoginPageContainer>
    );
}

export default LoginPage;
