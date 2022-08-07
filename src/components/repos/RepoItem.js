import React, {Fragment} from 'react'

function RepoItem({repo}) {
    return (
        <Fragment>
            <div className='card'>
                <a href={repo.html_url} target='_blank' rel="noreferrer" style={{color:'blue'}}>
                    <b>{repo.name}</b>
                </a>
                <p>{repo.description}</p>
                <h6>{repo.language}</h6>
            </div>
        </Fragment>
    )
}

export default RepoItem
