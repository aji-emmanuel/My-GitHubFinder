import React from 'react'
import {Link} from 'react-router-dom'

function UserItem ({user:{avatar_url, login, html_url}}) {
    return (
        <div className='card text-center'>
            <img src={avatar_url} alt='' className='round-img' style={{width: '60px', outerHeight:'60px'}} />
            <h3>{login}</h3>
            <Link to={`/user/${login}`} 
                className='btn-light btn-sm btn:hover'>Profile</Link>
        </div>
    )
}

export default UserItem
