// import React, { useState } from 'react';

// function Contact() {
//     // State variables to store form data
//     const [firstName, setFirstName] = useState('');
//     const [lastName, setLastName] = useState('');
//     const [email, setEmail] = useState('');
//     const [phoneNumber, setPhoneNumber] = useState('');
//     const [companyName, setCompanyName] = useState('');
//     const [howDidYouHear, setHowDidYouHear] = useState('');
//     const [projectDetails, setProjectDetails] = useState('');
//     const [needNDA, setNeedNDA] = useState(false);
//     const [marketingCommunication, setMarketingCommunication] = useState(false);

//     // Function to handle form submission
//     const handleSubmit = (event) => {
//         event.preventDefault();
//         // Form data can be used here for further processing
//         console.log({
//             firstName,
//             lastName,
//             email,
//             phoneNumber,
//             companyName,
//             howDidYouHear,
//             projectDetails,
//             needNDA,
//             marketingCommunication
//         });
//         // Clear form fields after submission (optional)
//         setFirstName('');
//         setLastName('');
//         setEmail('');
//         setPhoneNumber('');
//         setCompanyName('');
//         setHowDidYouHear('');
//         setProjectDetails('');
//         setNeedNDA(false);
//         setMarketingCommunication(false);
//     };

//     return (
//         <div className="container p-5">
//             <h3 className='text-center mb-5'>We would love to hear about your requirements. Please feel free to share them with us </h3>
//             <form onSubmit={handleSubmit}>
//                 <div className="mb-3">
//                     <label htmlFor="firstName" className="form-label">First Name *</label>
//                     <input type="text" className="form-control" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="lastName" className="form-label">Last Name *</label>
//                     <input type="text" className="form-control" id="lastName" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="email" className="form-label">Email *</label>
//                     <input type="email" className="form-control" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
//                     <input type="tel" className="form-control" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="companyName" className="form-label">Company Name</label>
//                     <input type="text" className="form-control" id="companyName" value={companyName} onChange={(e) => setCompanyName(e.target.value)} />
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="howDidYouHear" className="form-label">How did you hear about us? *</label>
//                     <input type="text" className="form-control" id="howDidYouHear" value={howDidYouHear} onChange={(e) => setHowDidYouHear(e.target.value)} required />
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="projectDetails" className="form-label">Tell us more about your project *</label>
//                     <textarea className="form-control" id="projectDetails" rows="4" value={projectDetails} onChange={(e) => setProjectDetails(e.target.value)} required></textarea>
//                 </div>
//                 <div className="mb-3 form-check">
//                     <input type="checkbox" className="form-check-input" id="ndaCheckbox" checked={needNDA} onChange={(e) => setNeedNDA(e.target.checked)} />
//                     <label className="form-check-label" htmlFor="ndaCheckbox">Do you need an NDA first?</label>
//                 </div>
//                 <div className="mb-3 form-check">
//                     <input type="checkbox" className="form-check-input" id="marketingCheckbox" checked={marketingCommunication} onChange={(e) => setMarketingCommunication(e.target.checked)} />
//                     <label className="form-check-label" htmlFor="marketingCheckbox">I agree to receive marketing communication from Netguru.</label>
//                 </div>
//                 <button type="submit" className="btn btn-primary p-">Submit</button>
//             </form>
//         </div>
//     );
// }

// export default Contact;

import React, { useState } from 'react';
import { useAuth } from './contextData';

function Contact() {
    const { setContactData } = useAuth();

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
        companyName: '',
        howDidYouHear: '',
        projectDetails: '',
        needNDA: false,
        marketingCommunication: false
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        setContactData(prevData => [...prevData, formData]);
        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: '',
            companyName: '',
            howDidYouHear: '',
            projectDetails: '',
            needNDA: false,
            marketingCommunication: false
        });
    };

    return (
        <div className="container p-5">
            <h3 className='text-center mb-5'>We would love to hear about your requirements. Please feel free to share them with us </h3>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="firstName" className="form-label">First Name *</label>
                    <input type="text" className="form-control" id="firstName" name="firstName" value={formData.firstName} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="lastName" className="form-label">Last Name *</label>
                    <input type="text" className="form-control" id="lastName" name="lastName" value={formData.lastName} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email *</label>
                    <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="phoneNumber" className="form-label">Phone Number</label>
                    <input type="tel" className="form-control" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="companyName" className="form-label">Company Name</label>
                    <input type="text" className="form-control" id="companyName" name="companyName" value={formData.companyName} onChange={handleChange} />
                </div>
                <div className="mb-3">
                    <label htmlFor="howDidYouHear" className="form-label">How did you hear about us? *</label>
                    <input type="text" className="form-control" id="howDidYouHear" name="howDidYouHear" value={formData.howDidYouHear} onChange={handleChange} required />
                </div>
                <div className="mb-3">
                    <label htmlFor="projectDetails" className="form-label">Tell us more about your project *</label>
                    <textarea className="form-control" id="projectDetails" name="projectDetails" rows="4" value={formData.projectDetails} onChange={handleChange} required></textarea>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="ndaCheckbox" name="needNDA" checked={formData.needNDA} onChange={handleChange} />
                    <label className="form-check-label" htmlFor="ndaCheckbox">Do you need an NDA first?</label>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="marketingCheckbox" name="marketingCommunication" checked={formData.marketingCommunication} onChange={handleChange} />
                    <label className="form-check-label" htmlFor="marketingCheckbox">I agree to receive marketing communication from Netguru.</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
}

export default Contact;

