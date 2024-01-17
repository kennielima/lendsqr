import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { data } from '../Homepage/UserData';
import './PopUp.scss';

type props = {
    data: data;
    hide: () => void;
  }
  function PopUp({  data, hide }: props) {
    console.log(data.status)

    return (
        <div className='view' onMouseLeave={hide}>
            <Link href={`users/${data.name}`}>
                <div>
                    <Image src='/eye.svg' alt='' height={15} width={15} />
                    <span>View User</span>
                </div>
            </Link>
            <div onClick={() => {data.status = 'Blacklisted'}}>
                <Image src='/blacklist.svg' alt='' height={15} width={15} />
                <span>Blacklist User</span>
            </div>
            <div>
                <Image src='/activate.svg' alt='' height={15} width={15} />
                <span>Activate User</span>
            </div>
        </div>
  )
}

export default PopUp