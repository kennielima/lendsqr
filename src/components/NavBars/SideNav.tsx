import './SideNav.scss';
import Image from 'next/image';
import textContext from '../ContextProvider/Context';
import { useContext } from 'react';
import Link from 'next/link';

function SideNav() {
    const ctx = useContext(textContext);
    return (
        <div className={ctx.click ? 'side-nav showSideNav' : 'side-nav hideSideNav'}>
            <div className='nav-link'>
                <Image src='/briefcase.svg' alt='' className='logo' height={14} width={16} />
                <span style={{ opacity: '100%' }}>Switch Organization</span>
                <Image src='/dropdown.svg' alt='' id='dropdown' height={14} width={16} />
            </div>
            <div className='nav-link' id='dashboard'>
                <Image src='/home.svg' alt='' className='logo' height={14} width={16} />
                <span>Dashboard</span>
            </div>
            <p>CUSTOMERS</p>
            <Link href='/'>
                <div className='nav-link'>
                    <Image src='/user-friends.svg' alt='' className='logo' height={14} width={16} />
                    <span>Users</span>
                </div>
            </Link>
            <div className='nav-link'>
                <Image src='/users.svg' alt='' className='logo' height={14} width={16} />
                <span>Guarantor</span>
            </div>
            <div className='nav-link'>
                <Image src='/sack.svg' alt='' className='logo' height={14} width={16} />
                <span>Loans</span>
            </div>
            <div className='nav-link'>
                <Image src='/handshake.svg' alt='' className='logo' height={14} width={16} />
                <span>Decision Models</span>
            </div>
            <div className='nav-link'>
                <Image src='/piggy-bank.svg' alt='' className='logo' height={14} width={16} />
                <span>Savings</span>
            </div>
            <div className='nav-link'>
                <Image src='/Group.svg' alt='' className='logo' height={14} width={16} />
                <span>Loan Requests</span>
            </div>
            <div className='nav-link'>
                <Image src='/user-check.svg' alt='' className='logo' height={14} width={16} />
                <span>Whitelist</span>
            </div>
            <div className='nav-link'>
                <Image src='/user-times.svg' alt='' className='logo' height={14} width={16} />
                <span>Karma</span>
            </div>


            <p>BUSINESSES</p>
            <div className='nav-link'>
                <Image src='/briefcase2.svg' alt='' className='logo' height={14} width={16} />
                <span>Organizations</span>
            </div>
            <div className='nav-link'>
                <Image src='/Group2.svg' alt='' className='logo' height={14} width={16} />
                <span>Loan Products</span>
            </div>
            <div className='nav-link'>
                <Image src='/save.svg' alt='' className='logo' height={14} width={16} />
                <span>Savings Products</span>
            </div>
            <div className='nav-link'>
                <Image src='/coins.svg' alt='' className='logo' height={14} width={16} />
                <span>Fees and Charges</span>
            </div>
            <div className='nav-link'>
                <Image src='/icon.svg' alt='' className='logo' height={14} width={16} />
                <span>Transactions</span>
            </div>
            <div className='nav-link'>
                <Image src='/galaxy.svg' alt='' className='logo' height={14} width={16} />
                <span>Services</span>
            </div>
            <div className='nav-link'>
                <Image src='/user-cog.svg' alt='' className='logo' height={14} width={16} />
                <span>Service Account</span>
            </div>
            <div className='nav-link'>
                <Image src='/scroll.svg' alt='' className='logo' height={14} width={16} />
                <span>Settlements</span>
            </div>
            <div className='nav-link'>
                <Image src='/chart-bar.svg' alt='' className='logo' height={14} width={16} />
                <span>Reports</span>
            </div>

            <p>SETTINGS</p>
            <div className='nav-link'>
                <Image src='/sliders.svg' alt='' className='logo' height={14} width={16} />
                <span>Preferences</span>
            </div>
            <div className='nav-link'>
                <Image src='/badge.svg' alt='' className='logo' height={14} width={16} />
                <span>Fees and Pricing</span>
            </div>
            <div className='nav-link'>
                <Image src='/clipboard.svg' alt='' className='logo' height={14} width={16} />
                <span>Audit Logs</span>
            </div>

            <hr id='line' />
            <div className='nav-link'>
                <Image src='/sign-out.svg' alt='' className='logo' height={14} width={16} />
                <span onClick={ctx.onLogout}>Log out</span>
            </div>
            <span style={{ fontSize: '12px', marginTop: '2rem' }}>v1.2.0</span>
        </div>
    )
}

export default SideNav