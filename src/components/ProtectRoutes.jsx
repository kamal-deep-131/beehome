import React from 'react'
import { myContext } from '../context/Context'
import { Navigate } from 'react-router-dom'

const ProtectRoutes = ({ children }) => {

    const { currentUser, isLoading } = myContext()
    console.log(currentUser)

    if (isLoading) {
        return (<div className='w-[100%] flex justify-center items-center h-screen'>
            <span className="loading loading-dots loading-lg"></span>
        </div>)
    }

    if (!currentUser) {
        return <Navigate to="/sign-in" />;
    }

    return children;
}

export default ProtectRoutes