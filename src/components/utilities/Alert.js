import React, {useContext} from 'react'
import AlertContext from '../../context/alert/alertContext'

const Alert = () => {
    const alertContext = useContext(AlertContext)
    const {message, type} = alertContext.alert
    return (
        message !=null && (
        <div className={`alert alert-${type} text-center`}>
            <i className= 'fas fa-info-circle'></i> {message}
        </div>
    ))
}

export default Alert