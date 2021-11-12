import { useReducer } from 'react';
import AlertReducer from './alertReducer';
import AlertContext from './alertContext'
import {SET_ALERT, REMOVE_ALERT} from '../types.js';

const AlertState = (props) =>{
    const initialState = {
        alert: {}
    }
    const [state, dispatch] = useReducer(AlertReducer, initialState);

     // Show Alert
    const setAlert = ({message, type}) =>{
        dispatch({
            type: SET_ALERT,
            payload: {message, type}
        })
        setTimeout(() => dispatch({type: REMOVE_ALERT, payload: {message:null, type:null}}), 2000);
     }

     return <AlertContext.Provider value={{setAlert, alert: state.alert}}>
         {props.children}
     </AlertContext.Provider>
}

export default AlertState