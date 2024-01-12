import React from 'react'
import Header from './Header'
import SideNav from './SideNav';
import './Home.scss';
import Image from 'next/image';
import UserList from './UserList';
<style>
  @import url('https://fonts.googleapis.com/css2?family=Work+Sans&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600&display=swap');
</style>

function Home() {

  return (
    <div style={{ width: '100%' }}>
      <Header />
      <div className='home'>
        <SideNav />
        <main className='userhead'>
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
          <UserList />
        </main>
      </div>
    </div>
  )
}

export default Home