import React from 'react'
import { useSelector } from 'react-redux'
import { Outlet, Navigate } from 'react-router-dom'

const PrivateRoute = () => {
    // const { currentUser } = useSelector((state) => state.user)
    // console.log(currentUser)
    // currentUser ? <Outlet /> : <Navigate to='/sign-in' /> 
    return (
        <div>PrivateRoute</div>
    )
}

export default PrivateRoute

// export default function PrivateRoute() {
//     const { currentUser } = useSelector((state) => state.user);
//     return currentUser ? <Outlet /> : <Navigate to='/sign-in' />;
// }