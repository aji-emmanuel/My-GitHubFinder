import React, {useContext} from 'react'
import UserItem from './Useritem'
import Spinner from '../utilities/Spinner'
import GithubContext from '../../context/github/githubContext'

function Users() {
    const githubContext = useContext(GithubContext)
    if(githubContext.loading)
    {
    return <Spinner />
    }else{
        return (
            <div className='grid-3'>
                {githubContext.users.map(user => 
                <UserItem key={user.id}  user = {user} />)}
            </div>
        )  
    }
}

export default Users
