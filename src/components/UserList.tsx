import Image from 'next/image'
import React, { Fragment } from 'react'
import './UserList.scss';
import DATA from './Generated.json'

function UserList() {
  return (
    <Fragment>
        <table className='user-body'>
            <tr className='headers'>
              <th>
                <span>ORGANIZATION</span>
                <Image src='menu2.svg' alt='' height={16} width={16} />
              </th>
              <th>
                <span>USERNAME</span>
                <Image src='menu2.svg' alt='' height={16} width={16} />
              </th>
              <th>
                <span>EMAIL</span>
                <Image src='menu2.svg' alt='' height={16} width={16} />
              </th>
              <th>
                <span>PHONE NUMBER</span>
                <Image src='menu2.svg' alt='' height={16} width={16} />
              </th>
              <th>
                <span>DATE JOINED</span>
                <Image src='menu2.svg' alt='' height={16} width={16} />
              </th>
              <th>
                <span>STATUS</span>
                <Image src='menu2.svg' alt='' height={16} width={16} />
              </th>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </table>
    </Fragment>
  )
}

export default UserList