import React from 'react'
import cookie from 'react-cookies'
import { Navigate, Outlet } from 'react-router-dom'

export const UnProtectedRoutes = () => {
    if(cookie.load('token'))
    return <Navigate to='/' />
else
    return <Outlet/>
}
