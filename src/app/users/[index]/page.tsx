"use client"
import Home from '@/components/Home';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React from 'react'
import './page.scss';
import Link from 'next/link';

function page() {
  const user = decodeURIComponent(useParams()?.index as any);
  console.log(user)
  return (
    <Home>
      <div className='main-div'>
        <Link href='/'>
          <div className='back'>
            <Image src='/back.svg' alt='logo' height={20} width={30} />
            <span>Back to users</span>
          </div>
        </Link>

        <div className='hdr-div'>
          <h2>User Details</h2>
          <div className='buttons'>
            <button id='blist'>Blacklist User</button>
            <button id='active'>Activate User</button>
          </div>
        </div>
        
        <div className='summary'>
          ss
        </div>
      </div>
    </Home>
  )
}

export default page