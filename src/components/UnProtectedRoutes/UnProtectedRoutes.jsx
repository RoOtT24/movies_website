import React from 'react'
import cookie from 'react-cookies'
import { Navigate, Outlet } from 'react-router-dom'

export const UnProtectedRoutes = () => {
    if(cookie.load('guest_session_id'))
    return <Navigate to='/' />
else
    return <Outlet/>
}
