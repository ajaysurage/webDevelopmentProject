import React from 'react';
import { NavLink } from 'react-router-dom';
import { useAuth } from './contextData';

function Navbar() {
    let user = useAuth()
    let {data}=user
    // console.log('profile says',data.isLoggedIn)
    
    return (
        <nav className="navbar navbar-expand-lg navbar-light px-5" style={{ backgroundColor: '#e3f2fd' }}>
            <div className="container">
                <NavLink className="navbar-brand" to='/'>
                    <img src="https://cdn-icons-png.flaticon.com/128/1329/1329016.png" width='50px' alt="" />
                </NavLink>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/'>Home</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/about'>About</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/contact'>Contact us</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <NavLink className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                            </NavLink>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <NavLink className="dropdown-item" to="#">Action</NavLink>
                                <NavLink className="dropdown-item" to="#">Another action</NavLink>
                                <NavLink className="dropdown-item" to="#">Something else here</NavLink>
                            </div>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to='/login'>LogIn</NavLink>
                        </li>
                    </ul>
                    <div className="form-inline my-2 my-lg-0">
                        {
                            data.isLoggedIn===true?<NavLink className="navbar-brand" to='/profile'>
                            <img src="https://cdn-icons-png.flaticon.com/128/3135/3135715.png" width='50px' alt="" />
                        </NavLink>:''
                        }
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
