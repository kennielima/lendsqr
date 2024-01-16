import Image from 'next/image'
import React, { useContext, useState } from 'react'
import './Header.scss'
import textContext from '../ContextProvider/Context'
const Header = () => {
    const ctx = useContext(textContext);
    const [openNav, setOpenNav] = useState(false);

    const toggleNav = () => {
        setOpenNav(!openNav)
        ctx.dispatch({ type: 'click' })
    }
    return (
        <header className='header-main'>
            <Image src='/logo.svg' alt='logo' height={120} width={120} />
            <div className='search-div'>
                <input placeholder='search for anything' className='search-input' />
                <button type='submit' className='search-button'>
                    <Image src='/search.svg' alt='' height={15} width={15} />
                </button>
            </div>
            <div className='right'>
                <div className='nav-right'>
                    <p style={{ fontFamily: 'Roboto' }}><u>Docs</u></p>
                    <Image src='/bell.svg' alt='' height={25} width={25} />
                    <Image src='/avatar.svg' className='avi' alt='' height={35} width={35} />
                    <p className='avi'>Adedeji</p>
                    <Image src='/ddown.svg' className='avi' id='ddown' alt='' height={10} width={10} />
                </div>
                <Image src={openNav ? '/close.svg' : '/menu.svg'} id='menu' onClick={toggleNav} alt='' height={25} width={25} />
            </div>
        </header>
    )
}

export default Header