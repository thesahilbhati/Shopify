import './signup.scss'
import { Box, Grid } from '@mui/material'
import { Link } from 'react-router-dom'
import { BiSolidUserPin } from 'react-icons/bi'
import { BsFillShieldLockFill } from 'react-icons/bs'
import { AiFillEdit } from 'react-icons/ai'
import { HiLogin } from 'react-icons/hi'
import Logo from '../Component/Logo'
import { useFormik } from 'formik'
import { signUpSchema } from '../../Schema'


const initialValues = {
    fname: "",
    lname: "",
    email: "",
    password: "",
    cpassword: "",
}

const Signup = () => {


    const { values, errors, handleBlur, handleChange, handleSubmit, touched } = useFormik({
        initialValues,
        validationSchema: signUpSchema,
        onSubmit: (values) => {
            console.log(values)
        }
    })

    return (
        <>
            <Box className='signup-root'>

                <Grid container className='signup-grid-container'>
                    <Grid item lg={6} md={6} sm={6} xs={12} className='signup-grid-1'>

                        <Box className='signup-logo-box'>
                            <Link to='/'> <Logo /></Link>
                        </Box>
                    </Grid>

                    <Grid item lg={6} md={6} sm={6} xs={12} className='signup-grid-2'>

                        <Box className='register-box'>
                            <Box className='logo-extra'><Logo /></Box>
                            <Link to='/login'> LOGIN <HiLogin className='register-icon' /> </Link>
                        </Box>

                        <Box className='form-box'>
                            <h1>REGISTER</h1>

                            <form onSubmit={handleSubmit}>

                                <Box className='input-box'>
                                    {errors.fname && touched.fname ? (
                                        <Box className='form-error-box' style={{ marginTop: '10px' }}>
                                            <p className='form-error'>{errors.fname}</p>
                                        </Box>
                                    ) : null
                                    }
                                    <Box className='input-field-box'>
                                        <AiFillEdit className='name-icon' />
                                        <input type="text"
                                            placeholder='First Name'
                                            name='fname'
                                            id='fname'
                                            autoComplete='off'
                                            value={values.fname}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                            error={errors.fname}
                                        />
                                    </Box>

                                </Box>

                                <Box className='input-box'>
                                    {errors.lname && touched.lname ? (
                                        <Box className='form-error-box'>
                                            <p className='form-error'>{errors.lname}</p>
                                        </Box>
                                    ) : null
                                    }
                                    <Box className='input-field-box'>
                                        <AiFillEdit className='name-icon' />
                                        <input type="text"
                                            placeholder='Last Name'
                                            name='lname'
                                            id='lname'
                                            autoComplete='off'
                                            value={values.lname}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                    </Box>
                                </Box>

                                <Box className='input-box'>
                                    {errors.email && touched.email ? (
                                        <Box className='form-error-box'>
                                            <p className='form-error'>{errors.email}</p>
                                        </Box>
                                    ) : null
                                    }
                                    <Box className='input-field-box'>
                                        <BiSolidUserPin className='email-icon' />
                                        <input type="text"
                                            placeholder='Email Address'
                                            name='email'
                                            id='email'
                                            autoComplete='off'
                                            value={values.email}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                    </Box>
                                </Box>

                                <Box className='input-box'>
                                    {errors.password && touched.password ? (
                                        <Box className='form-error-box'>
                                            <p className='form-error'>{errors.password}</p>
                                        </Box>
                                    ) : null
                                    }
                                    <Box className='input-field-box'>
                                        <BsFillShieldLockFill className='password-icon' />
                                        <input type="password"
                                            placeholder='Password'
                                            name='password'
                                            id='password'
                                            autoComplete='off'
                                            value={values.password}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                    </Box>
                                </Box>

                                <Box className='input-box'>
                                    {errors.cpassword && touched.cpassword ? (
                                        <Box className='form-error-box'>
                                            <p className='form-error'>{errors.cpassword}</p>
                                        </Box>
                                    ) : null
                                    }
                                    <Box className='input-field-box'>
                                        <BsFillShieldLockFill className='password-icon' />
                                        <input type="password"
                                            placeholder='Confirm Password'
                                            name='cpassword'
                                            id='cpassword'
                                            autoComplete='off'
                                            value={values.cpassword}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                    </Box>
                                </Box>

                                <Box className='check-forgot-box'>

                                    <Box className='check-box'>
                                        <input type="checkbox" name="" id="" />
                                        <p>Remember</p>
                                    </Box>

                                    <Box className='forgot-box'>
                                        <Link to='/forgot'>Forgot Password?</Link>
                                    </Box>
                                </Box>

                                <Box className='signup-btn-box'>
                                    <button className='signup-btn' type='submit' > SIGNUP </button>
                                </Box>


                            </form>

                        </Box>

                    </Grid>

                </Grid>

            </Box>
        </>
    )
}

export default Signup