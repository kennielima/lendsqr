import Image from 'next/image'
import React, { Fragment, useState } from 'react'
import './UserData.scss';
import DATA from './Generated.json'
import Filter from './Filter';
import Home from './Home';
import UserSummary from './UserSummary';
import Link from 'next/link';

function UserList() {
    type data = {
        company: string;
        name: string;
        email: string;
        phone: string;
        registered: string;
        status: string;
    }
    // const [currPage, setCurrentPage] = useState(1);
    // const [post, setPost] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    return (
        <Home>
            <UserSummary />
            <div style={{ position: 'relative', color: '#545F7D' }}>
                {showModal && <Filter />}
                {showModal2 && (
                    <div className='view'>
                        <div>
                            <Image src='eye.svg' alt='' height={15} width={15} />
                            <span>View User</span>
                        </div>
                        <div>
                            <Image src='Blacklist.svg' alt='' height={15} width={15} />
                            <span>View User</span>
                        </div>
                        <div>
                            <Image src='Activate.svg' alt='' height={15} width={15} />
                            <span>View User</span>
                        </div>
                    </div>
                )}
                <table className='user-body'>
                    <thead>
                        <tr className='table-head'>
                            <th style={{ width: '17%' }}>
                                <span>ORGANIZATION</span>
                                <Image
                                    src='menu2.svg'
                                    onClick={() => setShowModal(!showModal)}
                                    style={{ cursor: 'pointer' }}
                                    alt=''
                                    height={15}
                                    width={15}
                                />
                            </th>
                            <th style={{ width: '14%' }}>
                                <span id='name'>USERNAME</span>
                                <Image src='menu2.svg' alt='' height={15} width={15} />
                            </th>
                            <th style={{ width: '22%' }}>
                                <span id='email'>EMAIL</span>
                                <Image src='menu2.svg' alt='' height={15} width={15} />
                            </th>
                            <th style={{ width: '17%' }}>
                                <span>PHONE NUMBER</span>
                                <Image src='menu2.svg' alt='' height={15} width={15} />
                            </th>
                            <th style={{ width: '17%' }}>
                                <span>DATE JOINED</span>
                                <Image src='menu2.svg' alt='' height={15} width={15} />
                            </th>
                            <th style={{ width: '8%' }}>
                                <span>STATUS</span>
                                <Image src='menu2.svg' alt='' height={15} width={15} />
                            </th>
                            <th style={{ width: '3%' }}>
                                <span></span>
                            </th>
                        </tr>
                    </thead>
                    {DATA.map((data: data, index: number) => (
                        <tbody>
                            <tr className='table-row' key={index}>
                                <td style={{ width: '17%' }}>{data.company}</td>
                                <td style={{ width: '14%' }}>
                                    <Link href={`users/${index}`}>
                                        {data.name}
                                    </Link>
                                </td>
                                <td style={{ width: '22%' }}>{data.email}</td>
                                <td style={{ width: '17%' }}>{data.phone}</td>
                                <td style={{ width: '17%' }}>{data.registered}</td>
                                <td style={{ width: '8%' }} id={`${data.status}`}>{data.status}</td>
                                <td style={{ width: '3%', textAlign: 'right' }}>
                                    <Image
                                        src='dots.svg'
                                        alt=''
                                        onClick={() => setShowModal2(!showModal2)}
                                        height={15}
                                        width={15}
                                        style={{ cursor: 'pointer', position: 'relative' }}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td><hr id='liner' /></td>
                            </tr>
                        </tbody>
                    ))}
                </table>



                <div className='pagination'>
                    <div id='select-div'>
                        Showing
                        <select id='select'>
                            <option value='10'>10</option>
                            <option value='20'>20</option>
                            <option value='30'>30</option>
                            <option value='40'>40</option>
                            <option value='50'>50</option>
                            <option value='60'>60</option>
                            <option value='70'>70</option>
                            <option value='80'>80</option>
                            <option value='90'>90</option>
                            <option value='100'>100</option>
                        </select>
                        out of 100
                    </div>
                    <div>
                        <Image src='prev-btn.svg' alt='' height={25} width={25} />
                        <span></span>
                        <Image src='next-btn.svg' alt='' height={25} width={25} />
                    </div>
                </div>
            </div>
        </Home>
    )
}

export default UserList