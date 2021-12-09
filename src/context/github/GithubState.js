import { useReducer } from "react";
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import {
    SEARCH_USERS,
    GET_USER,
    CLEAR_USERS,
    GET_REPOS,
    SET_LOADING,
    SET_TEXT,
} from '../types.js';

let githubClientId;
let githubClientSecret;

if(process.env.NODE_ENV !== 'production'){
    githubClientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
    githubClientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;
}else{
    githubClientId = process.env.GITHUB_CLIENT_ID;
    githubClientSecret = process.env.GITHUB_CLIENT_SECRET;
}

const GithubState = props =>{
    const initialState = {
        users: [],
        user: {},
        repos: [],
        text: '',
        loading: false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    // Search Github Users
    const SearchUsers = async (text) =>{
        SetLoading()
        const response = await axios.get(`https://api.github.com/search/users?q=${text}&
        client_id=${githubClientId}
        &client_secret=${githubClientSecret}`);
        dispatch({
            type: SEARCH_USERS,
            payload: response.data.items
        })
    }

     // Get a user using the login(username)
    const GetUser = async (login) =>{
        SetLoading()
        const response = await axios.get(`https://api.github.com/users/${login}?
        client_id=${githubClientId}
        &client_secret=${githubClientSecret}`);
        dispatch({
            type: GET_USER,
            payload: response.data
        })
    }

    // Get User Repos
    const GetRepos = async (login)=>{
        SetLoading()
        const response = await axios.get(`https://api.github.com/users/${login}/repos?per_page=12&sort=created:asc&
        client_id=${githubClientId}
        &client_secret=${githubClientSecret}`);
        dispatch({
            type : GET_REPOS,
            payload : response.data
        })
    }

   // Clear Users from state
    const ClearUsers = () =>{
        dispatch({
            type: CLEAR_USERS
        })
      }

    // Set Loading
    const SetLoading = () => dispatch({type: SET_LOADING})

    // Set Search Text
    const SetText = (text) => {
        dispatch({
            type: SET_TEXT,
            payload: text
        })
    }

    return <GithubContext.Provider value={{
        users : state.users,
        user : state.user,
        repos : state.repos,
        loading : state.loading,
        text : state.text,
        SearchUsers,
        ClearUsers,
        GetUser,
        GetRepos,
        SetText
    }}>
        {props.children}
    </GithubContext.Provider>
}

export default GithubState