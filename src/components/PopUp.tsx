import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { data } from './UserData';

type props = {
    index: number;
    data: data;
  }
  function PopUp({ index, data }: props) {
    return (
        <div className='view'>
            <Link href={`users/${index}`}>
                <div>
                    {/* {index} */}
                    <Image src='eye.svg' alt='' height={15} width={15} />
                    <span>View User</span>
                </div>
            </Link>
            <div onClick={() => {{data.status = 'Blacklisted'}}}>
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