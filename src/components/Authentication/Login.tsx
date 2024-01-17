"use client"
import { Fragment, useContext, useEffect, useRef, useState } from 'react';
import './Login.scss'
import textContext from '../ContextProvider/Context';
import Image from 'next/image';
import UserData from '../Homepage/UserData';

const Login = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const pRef = useRef<HTMLInputElement>(null);
  const eRef = useRef<HTMLInputElement>(null);
  const ctx = useContext(textContext);
  const [loading, setLoading] = useState(true);
  const [showPassword, setShowPassword] = useState(false);

  const submitHandler = (e: any) => {
    e.preventDefault();
    let currentValidity = (password === '' || email === '' || !email.includes('@')) ? false : true;
    if (currentValidity === true) {
      console.log(currentValidity)
      ctx.onLogin(email, password)
    }
    else if (password === "") {
      pRef.current?.focus();
    }
    else if (!(email).includes('@') || email === "") {
      eRef.current?.focus();
    }
  }
  useEffect(() => {
    const checkAuth = async () => {
      await new Promise((resolve) => setTimeout(resolve, 50));
      setLoading(false);
    };
    checkAuth();
  }, [ctx.loggedin]);
  
  const toggleVisibility = () => {
    setShowPassword(!showPassword);
  }
  return (
    <Fragment>
      {loading ? null : !ctx.loggedin ? (
        <div className='body'>
          <div className='imagediv'>
            <Image src='/logo.svg' alt='' id='logo' height={200} width={200} />
            <Image src='/login.svg' alt='' id='hero' height={600} width={600} />
          </div>

          <div className='formdiv'>
            <Image src='/logo.svg' alt='' id='logo2' height={200} width={200} />
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
              <div id="pword">
              <input
                placeholder='Password'
                type={showPassword ? 'text' : 'password'}
                name='password'
                value={password}
                ref={pRef}
                onChange={(e) => setPassword(e.target.value)}
                />
                <span className='forgot show' onClick={toggleVisibility}>
                  {showPassword ? 'HIDE' : 'SHOW'}
                </span>
                </div>
              <p className='forgot'>FORGOT PASSWORD?</p>
              <button type="submit" id='submit'> LOG IN </button>
            </form>
          </div>
        </div>
      ) :
      (ctx.loggedin && <UserData />)}
    </Fragment>
  )
}

export default Login