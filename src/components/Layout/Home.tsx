import React, { Fragment } from 'react'
import Header from '../Navigation/Header'
import SideNav from '../Navigation/SideNav';
import './Home.scss';

<style>
  @import url('https://fonts.googleapis.com/css2?family=Work+Sans&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;500;600&display=swap');
</style>

function Home(props: any) {

  return (
    <Fragment>
      <Header />

      <div className='home'>
        <SideNav />
        <main className='user-main'>
          {props.children}
        </main>
      </div>
    </Fragment>
  )
}

export default Home