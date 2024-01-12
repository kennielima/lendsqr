"use client"
import React, { useState, useEffect, useReducer } from 'react';

type props = {
    onLogin: (email: string, password: string) => void,
    onLogout: () => void;
    loggedin: boolean,
    mail: string,
    pw: string
    click: boolean,
    dispatch:  React.Dispatch<any>;
}
const textContext = React.createContext({} as props);

export function ContextProvider(props: any) {
    const [loggedin, setLoggedin] = useState(false);
    const [mail, setMail] = useState('');
    const [pw, setPw] = useState('');
    console.log(loggedin)

    const reducer = (state: boolean, action: boolean | any) => {
        switch (action.type) {
            case 'click':
                return !state;
            // case 'logout':
            //     return false;
            default:
                return state;
        }
    };
    const [click, dispatch] = useReducer(reducer, false);

    useEffect(() => {
        const storedlog = localStorage.getItem('loggedin');
        const storedEmail = localStorage.getItem('email');
        const storedPassword = localStorage.getItem('password');

        if (storedlog && storedPassword && storedEmail) {
            setLoggedin(true);
            setMail(storedEmail);
            setPw(storedEmail);
        }
    }, []);

    function onLogin (email: string, password: string) {
        setLoggedin(true);
        setMail(email);
        setPw(password);
        localStorage.setItem('loggedin', 'true');
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
    }
    function onLogout () {
        setLoggedin(false)
    }

        return (
            <textContext.Provider value={{
                loggedin, onLogin, onLogout,
                mail, pw,
                click, dispatch,
            }}>
                {props.children}
            </textContext.Provider>
        )
    }
export default textContext;