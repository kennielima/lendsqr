import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { data } from './UserData';
import './PopUp.scss';

type props = {
    index: number;
    data: data;
    hide: () => void;
  }
  function PopUp({ index, data, hide }: props) {
    console.log(data.status)

    return (
        <div className='view' onMouseLeave={hide}>
            <Link href={`users/${data.name}`}>
                <div>
                    <Image src='eye.svg' alt='' height={15} width={15} />
                    <span>View User</span>
                </div>
            </Link>
            <div onClick={() => {data.status = 'Blacklisted'}}>
                <Image src='Blacklist.svg' alt='' height={15} width={15} />
                <span>Blacklist User</span>
            </div>
            <div>
                <Image src='Activate.svg' alt='' height={15} width={15} />
                <span>Activate User</span>
            </div>
        </div>
  )
}

export default PopUp