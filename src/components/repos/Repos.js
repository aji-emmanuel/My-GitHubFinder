import React, {Fragment, useContext} from 'react'
import RepoItem from './RepoItem'
import GithubContext from '../../context/github/githubContext'

function Repos() {
    const githubContext = useContext(GithubContext)
    return (
        <Fragment>
            <div className='text-center'>
                <h2>Popular Repositories</h2>
            </div>
            <div className='grid-3'>
                {githubContext.repos.map(repo => 
                <RepoItem key={repo.id}  repo = {repo} />)}
            </div>
        </Fragment>
    )
}

export default Repos
