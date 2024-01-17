import Image from 'next/image'
import React, { Fragment, useState } from 'react'
import './UserData.scss';
import DATA from '../utils/Generated.json'
import Filter from '../Modals/Filter';
import Home from '../Layout/Home';
import UserSummary from './UserSummary';
import Link from 'next/link';
import PopUp from '../Modals/PopUp';
import Pagination from '../Pagination/Pagination';

export interface data {
    company: string;
    name: string;
    email: string;
    phone: string;
    registered: string;
    status: string;
}

function UserList() {
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [postsPerPage, setPostsPerPage] = useState<number>(10);
    const lastPostIndex: number = currentPage * postsPerPage;
    const firstPostIndex = lastPostIndex - postsPerPage;
    const currentPosts = DATA.slice(firstPostIndex, lastPostIndex)


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
            {showModal && <Filter hide={hideModalFn} />}
            <div className='user-table-container'>
            <table className='user-table'>
                <thead>
                    <tr className='table-head'>
                        <th style={{ width: '17%', cursor: 'pointer' }}
                            onClick={showModalFn}
                            onMouseEnter={showModalFn}
                            >
                            <span>ORGANIZATION</span>
                            <Image
                                src='/menu2.svg'
                                alt=''
                                height={15}
                                width={15}
                            />
                        </th>
                        <th style={{ width: '14%' }}>
                            <span id='name'>USERNAME</span>
                            <Image src='/menu2.svg' alt='' height={15} width={15} />
                        </th>
                        <th style={{ width: '22%' }}>
                            <span id='email'>EMAIL</span>
                            <Image src='/menu2.svg' alt='' height={15} width={15} />
                        </th>
                        <th style={{ width: '17%' }}>
                            <span>PHONE NUMBER</span>
                            <Image src='/menu2.svg' alt='' height={15} width={15} />
                        </th>
                        <th style={{ width: '17%' }}>
                            <span>DATE JOINED</span>
                            <Image src='/menu2.svg' alt='' height={15} width={15} />
                        </th>
                        <th style={{ width: '8%' }}>
                            <span>STATUS</span>
                            <Image src='/menu2.svg' alt='' height={15} width={15} />
                        </th>
                        <th style={{ width: '3%' }}>
                            <span></span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {currentPosts.map((data: data, index: number) => (
                        <Fragment>
                            <Link href={`users/${data.name}`}>
                                <tr className='table-row' key={index}>
                                    <td style={{ width: '17%' }}>{data.company}</td>
                                    <td style={{ width: '14%' }}>{data.name}</td>
                                    <td style={{ width: '22%' }}>{data.email}</td>
                                    <td style={{ width: '17%' }}>{data.phone}</td>
                                    <td style={{ width: '17%' }}>{data.registered}</td>
                                    <td style={{ width: '8%' }} id={`${data.status}`}>{data.status}</td>
                                    <td style={{ width: '3%', textAlign: 'right', position: 'relative' }}>
                                        <Image
                                            src='/dots.svg'
                                            alt=''
                                            onClick={(e) => { e.preventDefault(); openPopUp(index) }}
                                            onMouseEnter={() => openPopUp(index)}
                                            height={15}
                                            width={15}
                                            style={{ cursor: 'pointer' }}
                                        />
                                        {openIndexPopUp === index && <PopUp data={data} hide={hidePopUp} />}
                                    </td>
                                </tr>
                            </Link>
                            <hr id='liner' />
                        </Fragment>
                    ))}
                </tbody>
            </table>
            </div>

            <Pagination
                totalPosts={DATA.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />

        </Home>
    )
}

export default UserList