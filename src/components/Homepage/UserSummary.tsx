import React, { Fragment } from 'react';
import './UserSummary.scss';
import Image from 'next/image';

function UserSummary() {
  return (
    <div id='summary-main'>
    <h2 id='USERS'> Users </h2>
    <div className='tabs'>
      <div className='tab'>
        <Image src='tab1.svg' alt='' height={40} width={40} />
        <p className='users'>USERS</p>
        <p className='numbers'>2,453</p>
      </div>
      <div className='tab'>
        <Image src='tab2.svg' alt='' height={40} width={40} />
        <p className='users'>ACTIVE USERS</p>
        <p className='numbers'>2,453</p>
      </div>
      <div className='tab'>
        <Image src='tab3.svg' alt='' height={40} width={40} />
        <p className='users'>USERS WITH LOANS</p>
        <p className='numbers'>12,453</p>
      </div>
      <div className='tab'>
        <Image src='tab4.svg' alt='' height={40} width={40} />
        <p className='users'>USERS WITH SAVINGS</p>
        <p className='numbers'>102,453</p>
      </div>
    </div>
  </div>  
  )
}

export default UserSummary