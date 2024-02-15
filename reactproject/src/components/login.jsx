import React, { useState } from 'react'
import { useAuth } from './contextData'
import { useNavigate } from 'react-router-dom'

function Login() {

    let [logInData, setLogInData] = useState({
        myname: '', myemail: '', mypass: ''
    })

    let handleChange = (e) => {
        setLogInData({ ...logInData, [e.target.name]: e.target.value })
    }
    let navigate = useNavigate()

    let getData = useAuth()
    // console.log(getData)



    let handleSubmit = (e) => {
        e.preventDefault()
        console.log(logInData)
        getData.setData({
            userData: logInData, isLoggedIn: true
        })
        navigate('/profile')

    }

    // console.log(logInData)
    return (
        <div className='bg-dark p-5 text-primary'>
            <h2 className='text-center'>Log-In Form</h2>
            <form onSubmit={handleSubmit}>
                <input type="text"
                    className='form-control my-3 w-50 m-auto'
                    placeholder='Name'
                    name='myname'
                    value={logInData.myname}
                    onChange={handleChange}
                />

                <input type="text"
                    className='form-control my-3 w-50 m-auto'
                    placeholder='email'
                    name='myemail'
                    value={logInData.myemail}
                    onChange={handleChange}
                />

                <input type="text"
                    className='form-control my-3 w-50 m-auto'
                    placeholder='password'
                    name='mypass'
                    value={logInData.mypass}
                    onChange={handleChange}
                />
                <button type='submit' className='btn btn-warning d-block w-25 mt-3  p-2 m-auto'>Submit</button>
            </form>
        </div>
    )
}

export default Login