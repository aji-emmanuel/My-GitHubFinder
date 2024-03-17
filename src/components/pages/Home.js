import React, {Fragment} from 'react'
import Users from '../users/Users'
import Search from '../users/Search'
import TestPage from './Tests'

function Home() {
    return (
       <Fragment>
            <Search />
            <Users />
            <TestPage />
        </Fragment>
    )
}

export default Home
