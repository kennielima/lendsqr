"use client"
import { Fragment, useContext, useRef, useState } from 'react';
import './Login.scss'
import textContext from './Context';
import Home from './Home';
import Image from 'next/image';

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const pRef = useRef<HTMLInputElement>(null);
  const eRef = useRef<HTMLInputElement>(null);
  const ctx = useContext(textContext);

  const submitHandler = (e: any) => {
    e.preventDefault();
    let currentValidity = (password === '' || email === '' || !email.includes('@')) ? false : true;
    if (currentValidity === true) {
      console.log(currentValidity)
      console.log(ctx.onLogin)
      ctx.onLogin(email, password)
    }
    else if (password === "") {
      pRef.current?.focus();
    }
    else if (!(email).includes('@') || email === "") {
      eRef.current?.focus();
    }
  }


  return (
    <Fragment>
      {!ctx.loggedin &&
        <div className='body'>
          <div className='imagediv'>
            <Image src='logo.svg' alt='' id='logo' height={200} width={200} />
            <Image src='login.svg' alt='' id='hero' height={600} width={600} />
          </div>

          <div className='formdiv'>
            <Image src='logo.svg' alt='' id='logo2' height={200} width={200} />
            <h1 id='welcome'>Welcome!</h1>
            <p id='enter'> Enter Details to login.</p>

            <form className='form' onSubmit={submitHandler}>
              <input
                placeholder='Email'
                type='email'
                name='email'
                value={email}
                ref={eRef}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                placeholder='Password'
                type='password'
                name='password'
                value={password}
                ref={pRef}
                onChange={(e) => setPassword(e.target.value)}
              />
              <p id='forgot'><b>Forgot password?</b></p>
              <button type="submit" id='submit'> Log in </button>
            </form>
          </div>
        </div>
      }
      {ctx.loggedin && <Home />}
    </Fragment>
  )
}

export default Login