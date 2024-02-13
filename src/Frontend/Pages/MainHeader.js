import React from 'react'
import Header from '../Component/Header'
import { Outlet } from 'react-router-dom'

const MainHeader = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    )
}

export default MainHeader