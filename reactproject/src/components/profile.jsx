import React from 'react';
import { useAuth } from './contextData';
import { useNavigate } from 'react-router-dom';

function Profile() {
    const { contactData } = useAuth();

    let getcon = useAuth()
    console.log(getcon)

    let navigate = useNavigate()

    let logOutHome = () => {
        getcon.logOut()
        navigate('/')
    }

    return (
        <div className="container bg-dark text-light py-4 ">
            <div class="card d-flex justify-content-center px-2 text-center" style={{ width: '21rem' }}>
                <h4 className="card-text">Welcome to Dashboard</h4>
            <img className="card-img-top" src="https://www.bhmpics.com/downloads/wallpaper-user-profile/8.user-profile-icon-abstract-blue-background-illustration-design-isolated-167295690.jpg" alt="" />
            <div className="card-body">
                <h5 className="card-title">User Name: {getcon?.data?.userData?.myname}</h5>
                <h5 className="card-title">User Email: {getcon?.data?.userData?.myemail}</h5>
                <button className='btn btn-danger d-block w-50 m-auto my-4' onClick={logOutHome}>Log Out</button>
            </div>
        </div>
            

            <h1 className="text-center my-5">User Inquiry</h1>
            <div className="table-responsive">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email</th>
                            <th>Phone Number</th>
                            <th>Company Name</th>
                            <th>How Did You Hear</th>
                            <th>Project Details</th>
                            <th>Need NDA</th>
                            <th>Marketing Communication</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contactData.map((data, index) => (
                            <tr key={index}>
                                <td>{data.firstName}</td>
                                <td>{data.lastName}</td>
                                <td>{data.email}</td>
                                <td>{data.phoneNumber}</td>
                                <td>{data.companyName}</td>
                                <td>{data.howDidYouHear}</td>
                                <td>{data.projectDetails}</td>
                                <td>{data.needNDA ? 'Yes' : 'No'}</td>
                                <td>{data.marketingCommunication ? 'Yes' : 'No'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Profile;
