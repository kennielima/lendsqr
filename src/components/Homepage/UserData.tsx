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
                    {currentPosts.map((data: data, index: number) => (
                        <Fragment>
                            <tr className='table-row' key={index}>
                                <td style={{ width: '17%' }}>
                                    <Link href={`users/${data.name}`}>{data.company}</Link>
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
                            <hr id='liner' />
                        </Fragment>
                    ))}
                </tbody>
            </table>

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