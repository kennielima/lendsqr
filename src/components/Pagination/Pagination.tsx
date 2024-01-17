import React from 'react';
import Image from 'next/image';
import './Pagination.scss';

type props = {
    totalPosts: number,
    postsPerPage: number,
    setCurrentPage: any,
    currentPage: any
}
function Pagination({ totalPosts, postsPerPage, setCurrentPage, currentPage }: props) {
    let pages = [];

    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pages.push(i)
    }
    console.log(currentPage)
    return (
        <div className='pagination'>
            <div id='select-div'>
                Showing
                <select
                    id='select'
                    value={currentPage}
                    onChange={(e) => setCurrentPage(e.target.value)}>
                    {pages.map((page) => (
                        <option value={page}>{page * 10}</option>
                    ))}
                </select>
                out of 100
            </div>

            <div id='pages'>
                <button onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1}>
                    <Image src='/prev-btn.svg' alt='' height={25} width={25} />
                </button>
                {pages.map((page, index) => (
                    <span
                        id={page === currentPage ? 'active' : ''}
                        onClick={() => setCurrentPage(page)}
                        key={index}
                    >
                        {page}
                    </span>
                ))}
                <button onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === 100}>
                    <Image src='/next-btn.svg' alt='' height={25} width={25} />
                </button>

            </div>
        </div>
    )
}

export default Pagination