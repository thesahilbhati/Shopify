import './login.scss'
import { Box, Grid } from '@mui/material'
import Logo from '../Component/Logo'
import { Link, useNavigate } from 'react-router-dom'
import { BiSolidUserPin } from 'react-icons/bi'
import { BsFillShieldLockFill } from 'react-icons/bs'
import { HiLogin } from 'react-icons/hi'
import { useFormik } from 'formik'
import { loginSchema } from '../../Schema'
import { useState } from 'react'


const initialValues = {
  email: "",
  password: "",
}



const Login = () => {
  const [rememberMe, setRememberMe] = useState(false);
  const [loginstatus, setLoginStatus] = useState(false);


  const navigate = useNavigate()

  const { values, errors, handleBlur, handleChange, handleSubmit, touched } = useFormik({
    initialValues,
    validationSchema: loginSchema,
    onSubmit: (values) => {
      console.log(values)

    }
  })



  const handleLogin = async () => {
    // console.log(values)
    setLoginStatus(true)
    if (loginstatus) {
      navigate('/')
    }
    if (rememberMe) {
      localStorage.setItem("credentials", JSON.stringify(values))
    }
    console.log('rememberMe', rememberMe)
  }





  return (
    <>

      <Box className='login-root'>

        <Grid container className='login-grid-container'>
          <Grid item lg={6} md={6} sm={6} xs={12} className='login-grid-1'>

            <Box className='login-logo-box'>
              <Link to='/'> <Logo /></Link>
            </Box>
          </Grid>

          <Grid item lg={6} md={6} sm={6} xs={12} className='login-grid-2'>

            <Box className='register-box'>
              <Box className='logo-extra'><Logo /></Box>
              <Link to='/signup'>Register <HiLogin className='register-icon' /> </Link>
            </Box>

            <Box className='form-box'>
              <h1>SIGN IN</h1>

              <form onSubmit={handleSubmit}>

                <Box className='input-box'>

                  {errors.email && touched.email ? (
                    <Box className='form-error-box' style={{ marginTop: '10px' }}>
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
                      onBlur={handleBlur}
                      onChange={handleChange}
                      error={errors.email}
                      value={values.email}
                      required
                    />
                  </Box>
                </Box>

                <Box className='input-box'>

                  {errors.password && touched.password ? (
                    <Box className='form-error-box' style={{ marginTop: '10px' }}>
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
                      required
                      onBlur={handleBlur}
                      onChange={handleChange}
                      error={errors.password}
                      value={values.password}
                    />
                  </Box>
                </Box>

                <Box className='check-forgot-box'>

                  <Box className='check-box'>
                    <input type="checkbox" name="" id="" onChange={() => setRememberMe(!rememberMe)} checked={rememberMe} />
                    <p>Remember</p>
                  </Box>

                  <Box className='forgot-box'>
                    <Link to='/forgot'>Forgot Password?</Link>
                  </Box>
                </Box>

                <Box className='login-btn-box'>
                  <button className='login-btn' type='submit' onSubmit={handleLogin}>LOGIN </button>
                </Box>


              </form>

            </Box>

          </Grid>

        </Grid>

      </Box>

    </>
  )
}

export default Login