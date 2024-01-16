"use client"
import Home from '@/components/Template/Home';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import './page.scss';
import Link from 'next/link';
import DATA from '@/components/utils/Generated.json'

function page() {
    const username = decodeURIComponent(useParams()?.name as any);
    const user = DATA.find(data => data.name === username)
    const firstname = username.split(' ')[0];
    const lastname = username.split(' ')[1];

    return (
        <Home>
            <div className='main-div'>
                <Link href='/'>
                    <div className='back'>
                        <Image src='/back.svg' alt='logo' height={20} width={30} />
                        <span>Back to users</span>
                    </div>
                </Link>

                <div className='hdr-div'>
                    <h2>User Details</h2>
                    <div className='buttons'>
                        <button id='blist'>Blacklist User</button>
                        <button id='active'>Activate User</button>
                    </div>
                </div>

                <div className='summary'>
                    <div className='image-div'>
                        <div id='avi'>
                            <Image src={`${user?.picture}`} alt='' height={110} width={110} />
                        </div>

                        <div>
                            <h3>{username}</h3>
                            <p id='code'>LSQFf587g90</p>
                        </div>

                        <hr />

                        <div>
                            <p id='tier'>User’s Tier</p>
                            <div id='images'>
                                <Image src='/star.svg' alt='' height={15} width={15} />
                                <Image src='/star2.svg' alt='' height={15} width={15} />
                                <Image src='/star2.svg' alt='' height={15} width={15} />
                            </div>
                        </div>

                        <hr />

                        <div>
                            <h3>₦200,000.00</h3>
                            <p id='bank'>9912345678/Providus Bank</p>
                        </div>
                    </div>

                    <div className='headings'>
                        <p id='general'>General Details<span></span></p>
                        <p>Documents</p>
                        <p>Bank Details</p>
                        <p>Loans</p>
                        <p>Savings</p>
                        <p>App and System</p>
                    </div>
                </div>

                <div className='detail-body'>
                    <div className='section'>
                        <h4>Personal Information</h4>
                        <div className='section-div'>
                            <div className='info-div'>
                                <p className='info-hdr'>FULL NAME</p>
                                <p className='info'>{username}</p>
                            </div>
                            <div className='info-div'>
                                <p className='info-hdr'>PHONE NUMBER</p>
                                <p className='info'>{user?.phone}</p>
                            </div>
                            <div className='info-div'>
                                <p className='info-hdr'>EMAIL ADDRESS</p>
                                <p className='info'>{user?.email}</p>
                            </div>
                            <div className='info-div'>
                                <p className='info-hdr'>BVN</p>
                                <p className='info'>024834667</p>
                            </div>
                            <div className='info-div'>
                                <p className='info-hdr'>GENDER</p>
                                <p className='info'>{user?.gender}</p>
                            </div>
                            <div className='info-div'>
                                <p className='info-hdr'>MARITAL STATUS</p>
                                <p className='info'>Single</p>
                            </div>
                            <div className='info-div'>
                                <p className='info-hdr'>CHILDREN</p>
                                <p className='info'>None</p>
                            </div>
                            <div className='info-div'>
                                <p className='info-hdr'>TYPE OF RESIDENCE</p>
                                <p className='info'>Parent's Apartment</p>
                            </div>
                        </div>
                    </div>
                    <hr />

                    <div id='section'>
                        <h4>Education and Employment</h4>
                        <div className='section-div'>
                            <div className='info-div'>
                                <p className='info-hdr'>LEVEL OF EMPLOYMENT</p>
                                <p className='info'>B.Sc</p>
                            </div>
                            <div className='info-div'>
                                <p className='info-hdr'>EMPLOYMENT STATUS</p>
                                <p className='info'>Employed</p>
                            </div>
                            <div className='info-div'>
                                <p className='info-hdr'>SECTOR OF EMPLOYMENT</p>
                                <p className='info'>FinTech</p>
                            </div>
                            <div className='info-div'>
                                <p className='info-hdr'>DURATION OF EMPLOYMENT</p>
                                <p className='info'>2 years</p>
                            </div>
                            <div className='info-div'>
                                <p className='info-hdr'>OFFICE EMAIL</p>
                                <p className='info'>{user?.email}</p>
                            </div>
                            <div className='info-div'>
                                <p className='info-hdr'>MONTHLY INCOME</p>
                                <p className='info'>₦200,000.00- ₦400,000.00</p>
                            </div>
                            <div className='info-div'>
                                <p className='info-hdr'>LOAN REPAYMENT</p>
                                <p className='info'>40,000</p>
                            </div>
                            <div className='info-div'>
                                <p className='info-hdr'>TYPE OF RESIDENCE</p>
                                <p className='info'>Parent's Apartment</p>
                            </div>
                        </div>
                    </div>

                    <hr />

                    <div id='section'>
                        <h4>Socials</h4>
                        <div className='section-div'>
                            <div className='info-div'>
                                <p className='info-hdr'>TWITTER</p>
                                <p className='info'>@{firstname}_{lastname}</p>
                            </div>
                            <div className='info-div'>
                                <p className='info-hdr'>FACEBOOK</p>
                                <p className='info'>{username}</p>
                            </div>
                            <div className='info-div'>
                                <p className='info-hdr'>INSTAGRAM</p>
                                <p className='info'>@{firstname}_{lastname}</p>
                            </div>
                        </div>
                    </div>

                    <hr />

                    <div id='section'>
                        <h4>Guarantor</h4>
                        <div className='section-div'>
                            <div className='info-div'>
                                <p className='info-hdr'>FULL NAME</p>
                                <p className='info'>DEBBY OGANA</p>
                            </div>
                            <div className='info-div'>
                                <p className='info-hdr'>PHONE NUMBER</p>
                                <p className='info'>{user?.phone}</p>
                            </div>
                            <div className='info-div'>
                                <p className='info-hdr'>EMAIL ADDRESS</p>
                                <p className='info'>Grace@gmail.com</p>
                            </div>
                            <div className='info-div'>
                                <p className='info-hdr'>RELATIONSHIP</p>
                                <p className='info'>SISTER</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Home>
    )
}

export default page