import React, { useState } from 'react'
import './header.scss'
import { Box } from '@mui/material'
import Logo from './Logo'
import { NavLink } from 'react-router-dom'
import { CgMenuGridR } from 'react-icons/cg';
import { AiOutlineClose } from 'react-icons/ai';

const MenuItem = [

    {
        pageName: 'Home',
        path: '/user/home'
    },

    {
        pageName: 'About',
        path: '/user/about'
    },

    {
        pageName: 'Contact',
        path: '/user/contact'
    },
]


const Header = () => {



    const [sidebar, setSidebar] = useState({
        left: "-100%"
    })

    const OpenSidebar = () => {
        setSidebar({
            left: "0",
            overflow: "hidden"
        })
    }

    const CloseSidebar = () => {
        setSidebar({
            left: "-100%"
        })
    }

    // sidebar ? document.body.style.overflow = "hidden" : document.body.style.overflow = "auto";

    return (
        <>
            <Box className='header-root'>


                <Box className='header-box'>

                    <Box className='header-box-1'>

                        <NavLink onClick={CloseSidebar} to='/user/home'> <Logo /></NavLink>

                    </Box>

                    <Box className='header-box-2'>
                        {
                            MenuItem.map((item) =>
                                <>

                                    <ul>
                                        <li>
                                            <NavLink activeclassname='active' to={item.path}> {item.pageName} </NavLink>
                                        </li>
                                    </ul>

                                </>
                            )
                        }
                    </Box>

                    <button onClick={OpenSidebar} className='menu-btn'><CgMenuGridR className='menu-icon' /></button>

                </Box>

            </Box>


            <Box className='sidebar-root' style={sidebar}>


                <Box className='sidebar-box'>

                    <button onClick={CloseSidebar} className='close-btn'><AiOutlineClose className='close-icon' /></button>

                    {
                        MenuItem.map((item) =>
                            <>


                                <ul>
                                    <li>
                                        <NavLink onClick={CloseSidebar} activeclassname='active' to={item.path}>{item.pageName}</NavLink>
                                    </li>
                                </ul>

                            </>
                        )
                    }

                </Box>

            </Box>
        </>
    )
}

export default Header