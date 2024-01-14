import Image from 'next/image'
import React, { Fragment, useState } from 'react'
import './UserData.scss';
import DATA from './utils/Generated.json'
import Filter from './Filter';
import Home from './Template/Home';
import UserSummary from './UserSummary';
import Link from 'next/link';
import PopUp from './PopUp';

export interface data {
    company: string;
    name: string;
    email: string;
    phone: string;
    registered: string;
    status: string;
}

function UserList() {
    // const [currPage, setCurrentPage] = useState(1);
    // const [post, setPost] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const [showModal2, setShowModal2] = useState(false);
    // const [openPopUp, setOpenPopUp] = useState<number | null>(null);

    const togglePopUp = (index: number) => {
    //   setOpenPopUp(openPopUp === index ? null : index);
        setShowModal2(!showModal2);
        console.log(index)
    };
    // console.log(openPopUp);

    // const modal = (index: number) => {
    //     setShowModal2(!showModal2);
    //     togglePopUp(index);
    // }

    return (
        <Home>
            <UserSummary />
            <div style={{ position: 'relative', color: '#545F7D' }}>
                {showModal && <Filter />}
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
                    <tbody>
                        {DATA.map((data: data, index: number) => (
                            <Fragment>
                                <tr className='table-row' key={index}>
                                    <td style={{ width: '17%' }}>
                                        <Link href={`users/${index}`}>{data.company}</Link>
                                    </td>
                                    <td style={{ width: '14%' }}>
                                        <Link href={`users/${index}`}>{data.name}</Link>
                                    </td>
                                    <td style={{ width: '22%' }}>
                                        <Link href={`users/${index}`}>{data.email}</Link>
                                    </td>
                                    <td style={{ width: '17%' }}>
                                        <Link href={`users/${index}`}>{data.phone}</Link>
                                    </td>
                                    <td style={{ width: '17%' }}>
                                        <Link href={`users/${index}`}>{data.registered}</Link>
                                    </td>
                                    <td style={{ width: '8%' }} id={`${data.status}`}>{data.status}</td>
                                    <td style={{ width: '3%', textAlign: 'right' }}>
                                        <Image
                                            src='dots.svg'
                                            alt=''
                                            onClick={() => togglePopUp(index)}
                                            height={15}
                                            width={15}
                                            style={{ cursor: 'pointer' }}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td><hr id='liner' /></td>
                                </tr>
                                {showModal2 && <PopUp index={index} data={data} />}
                            </Fragment>
                        ))}
                    </tbody>
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