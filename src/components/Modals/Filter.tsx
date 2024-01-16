import React from 'react'
import DATA from '../utils/Generated.json'
import './Filter.scss';

type props = {
    hide: () => void;
}
function Organization({hide}: props) {
    const status = ['Active', 'Inactive', 'Pending', 'Blacklisted']
    return (
        <form className='org' onMouseLeave={hide}>
            <div className='input-div'>
                <label>Organization</label>
                <select>
                <option value='' disabled selected>Select</option>
                    {DATA.map((data) => (
                        <option value={data.company}>{data.company}</option>
                    ))}
                </select>
            </div>
            <div className='input-div'>
                <label htmlFor='name'>Username</label>
                <input placeholder='User' type='name' />
            </div>
            <div className='input-div'>
                <label htmlFor='email'>Email</label>
                <input placeholder='Email' type='email' />
            </div>
            <div className='input-div'>
                <label htmlFor='date'>Date</label>
                <input placeholder='Date' />
            </div>
            <div className='input-div'>
                <label htmlFor='name'>Phone number</label>
                <input placeholder='Phone number' type='email' />
            </div>
            <div className='input-div'>
                <label>Status</label>
                <select>
                    <option value='' disabled selected>Select</option>
                    {status.map((s) => (
                        <option value={s}>{s}</option>
                    ))}
                </select>
            </div>
            <div id='buttons'>
                <button id='reset'>Reset</button>
                <button id='filter'>Filter</button>
            </div>
        </form>
    )
}

export default Organization