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
    const [openIndexPopUp, setOpenIndexPopUp] = useState<number | null>(null);
    const showModalFn = () => { setShowModal(!showModal) }
    const hideModalFn = () => { setShowModal(false) }
    const openPopUp = (index: number) => {
        setOpenIndexPopUp(openIndexPopUp === index ? null : index)
    };
    const hidePopUp = () => { setOpenIndexPopUp(null) };
    return (
        <Home>
            <UserSummary />
            {/* <div className='user-body'> */}
            {showModal && <Filter hide={hideModalFn} />}
            <table className='user-table'>
                <thead>
                    <tr className='table-head'>
                        <th style={{ width: '17%' }}>
                            <span>ORGANIZATION</span>
                            <Image
                                src='menu2.svg'
                                onClick={showModalFn}
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
                                <Link href={`/users/${data.name}`}>{data.company}</Link>
                                </td>
                                <td style={{ width: '14%' }}>
                                    <Link href={`users/${data.name}`}>{data.name}</Link>
                                </td>
                                <td style={{ width: '22%' }}>
                                    <Link href={`users/${data.name}`}>{data.email}</Link>
                                </td>
                                <td style={{ width: '17%' }}>
                                    <Link href={`users/${data.name}`}>{data.phone}</Link>
                                </td>
                                <td style={{ width: '17%' }}>
                                    <Link href={`users/${data.name}`}>{data.registered}</Link>
                                </td>
                                <td style={{ width: '8%' }} id={`${data.status}`}>{data.status}</td>
                                <td style={{ width: '3%', textAlign: 'right', position: 'relative' }}>
                                    <Image
                                        src='dots.svg'
                                        alt=''
                                        onClick={() => openPopUp(index)}
                                        height={15}
                                        width={15}
                                        style={{ cursor: 'pointer' }}
                                    />
                                    {openIndexPopUp === index && <PopUp index={index} data={data} hide={hidePopUp} />}
                                </td>
                            </tr>
                            <tr>
                                <td><hr id='liner' /></td>
                            </tr>
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
            {/* </div> */}
        </Home>
    )
}

export default UserList