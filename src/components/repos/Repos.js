import React, {Fragment, useContext} from 'react'
import RepoItem from './RepoItem'
import GithubContext from '../../context/github/githubContext'

function Repos() {
    const githubContext = useContext(GithubContext);
    const { repos, user } = githubContext;
    return (
        <Fragment>
            <div className='text-center'>
                {repos.length>0 ? (<h2>Popular Repositories</h2>) : (<h2>No Repositories</h2>)}
            </div>
            <div className='grid-3'>
                {repos.map(repo => 
                <RepoItem key={repo.id}  repo = {repo} />)}
            </div>
             {repos.length===12 && <div className='card text-center'>
                <a className='btn' href={`https://github.com/${user.login}?tab=repositories`} target='_blank'  rel="noreferrer">
                    View all Repositories on GitHub
                </a>
            </div>}
        </Fragment>
    )
}

export default Repos
