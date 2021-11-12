import React, {useEffect, useContext, Fragment} from 'react'
import Spinner from '../utilities/Spinner'
import Repos from '../repos/Repos'
import {Link} from 'react-router-dom'
import GithubContext from '../../context/github/githubContext'

const User = ({match}) => {
    const githubContext = useContext(GithubContext)
    const {GetUser, GetRepos, loading} = githubContext
    const {avatar_url, name, location, hirable, followers, following, public_gists,
            public_repos, html_url, login, company, bio, blog} = githubContext.user

    useEffect(() => {
        GetUser(match.params.login)
        GetRepos(match.params.login)
        // eslint-disable-next-line
    }, [])  

   if(loading)
    {
        return <Spinner />
    }
    else{
    return (
        <Fragment>
        <div className='grid-2 card'>
            <div className='all-center'>
                <img src={avatar_url} alt='' className='round-img' style={{width: '150px'}} />
                <h2>{name}</h2>
                <p>Location: {location}</p>
                <p>Hirable: {hirable ? (<i className='fas fa-check text-success' />) : (<i className='fas fa-times-circle text-danger' />)} </p>
            </div>
            <div>
                {bio && <Fragment>
                    <strong className='text-center'>Bio</strong>
                    <p>{bio}</p>
                </Fragment>}
                <a href={html_url} className='btn btn-dark my-1 text-center'>Visit Github Profile</a>
                <ul>
                    <li>
                        {login && <Fragment>
                          <strong>Username: {login}</strong>
                        </Fragment>}
                    </li>
                     <li>
                         {company && <Fragment>
                          <strong>Company: {company}</strong>
                        </Fragment>}
                    </li>
                     <li>
                         {blog && <Fragment>
                          <strong>Website: {blog}</strong>
                        </Fragment>}
                    </li>
                </ul>
            </div>
           
        </div>
        <div className='card text-center'>
            <div className='badge badge-primary'>Following: {following}</div>
            <div className='badge badge-success'>Followers: {followers}</div>
            <div className='badge badge-light'>Public Repos: {public_repos}</div>
            <div className='badge badge-dark'>Public Gists: {public_gists}</div>
        </div>
             <Link to ='/'>Back</Link>
             <Repos />
        </Fragment>
    )}
}

export default User
