import React from 'react'
import {Link} from 'react-router-dom'

function UserItem ({user:{avatar_url, login}}) {
    return (
        <Link to={`/user/${login}`} >
            <div className='card text-center'>
                <img src={avatar_url} alt='' className='round-img' style={{width: '60px', outerHeight:'60px'}} />
                <h3>{login}</h3>
                <button className='btn btn-sm'>Profile</button>
            </div>
        </Link>
    )
}

export default UserItem
