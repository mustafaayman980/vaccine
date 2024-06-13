/* eslint-disable react/prop-types */
import React from 'react'
import { useAuthContext } from '../context/AuthContext'
import { Navigate, Outlet } from 'react-router-dom'

const ProductRoute = ({children}) => {
    const {token} = useAuthContext()
  return (
    <>
        {token ? <Outlet/> : <Navigate to={"/login"} replace={true}/>}
    </>
  )
}

export default ProductRoute