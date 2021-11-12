import React, { useContext } from 'react'
import GithubContext from '../../context/github/githubContext'
import AlertContext from '../../context/alert/alertContext'

const Search = () =>{
    const githubContext = useContext(GithubContext);
    const alertContext = useContext(AlertContext);
    const {users, text, SearchUsers, SetText, ClearUsers} = githubContext;
    const {setAlert} = alertContext;
    const showClear = users.length>0 ? true: false

    const onSubmit = (e) => {
        e.preventDefault()
        if(text === ''){
            setAlert({message:'Please enter a text to search', type:'danger'})
        }
        else{
            SearchUsers(text)
        }
    }
    const onChange = (e)=> {
        SetText(e.target.value)
    }

    return (
        <div>
            <form className='form' onSubmit={onSubmit}>
                <input type='text' 
                        name='text' value={text} 
                        placeholder='Enter Text to Search GitHub Users...' 
                        onChange={onChange}/>
                <button type="submit" 
                        className='btn btn-dark btn-block'>
                        Search
                </button>
                        
            </form>
            {showClear && 
                <button className='btn btn-light btn-block' 
                    onClick = {ClearUsers}>
                        Clear
            </button>
            }
        </div>
    )
}

export default Search
