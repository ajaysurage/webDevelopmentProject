import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const About = () => {
    let navigate = useNavigate()
    let contactform = () => {
        navigate('/contact')
    }
    return (
        <>
            <div className="container-fluid p-0">
                <div className="main bg-cover d-flex align-items-center" style={{ height: "400px" }}>
                    <div className="hero text-center">
                        <span className="display-4">About us </span>
                        <span className="fs-1"> Ensuring that software works for your business</span>
                    </div>
                </div>
                <div className="container py-5">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="carddd p-4 p-lg-5">
                                <h2 className="mb-4">Company Background</h2>
                                <p className="mb-4">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.
                                </p>
                                <h2 className="mb-4">Our Services</h2>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="card mb-4">
                                            <div className="card-body">
                                                <h5 className="card-title">Software Development</h5>
                                                <p className="card-text">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card mb-4">
                                            <div className="card-body">
                                                <h5 className="card-title">Software Development</h5>
                                                <p className="card-text">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card mb-4">
                                            <div className="card-body">
                                                <h5 className="card-title">Software Development</h5>
                                                <p className="card-text">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="card mb-4">
                                            <div className="card-body">
                                                <h5 className="card-title">Software Maintenance</h5>
                                                <p className="card-text">
                                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="oldman">
                                <img src="https://www.sawindia.com/wp-content/uploads/2020/08/inner_image_01-850x1280.jpg" alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row mb-3">
                    <div className="col-lg-12">

                        <h1 className="text-center font-weight-bold">OUR WORK</h1>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-6 col-lg-3 mb-4 ">
                        <div className="service text-center border-right border-md-0 border border-2">
                            <img src="https://thumbs.dreamstime.com/z/automation-software-technology-process-system-business-concept-automation-software-technology-process-system-business-concept-101330827.jpg" alt="" style={{ width: '100%', height: '220px' }} />
                            <h4 className='mt-3 '>Data Analytics</h4><br />
                            <h6>If you need a comfortable hotel, our operators will book it for you, and take a taxi to the
                                address</h6>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-4">
                        <div className="service text-center border-right border-md-0 border-bottom border border-3">
                            <img src="https://thumbs.dreamstime.com/b/business-technology-internet-network-concept-young-busine-businessman-shows-word-virtual-display-future-98360762.jpg" alt="" style={{ width: '100%', height: '220px' }} />
                            <h4 className='mt-3'>Cyber Sequrity</h4><br />
                            <h6>If you need a comfortable hotel, our operators will book it for you, and take a taxi to the
                                address</h6>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-4">
                        <div className="service text-center border-right border-md-0 border-bottom border border-3">
                            <img src="https://st4.depositphotos.com/1907633/20391/i/450/depositphotos_203913644-stock-photo-developing-programming-coding-technologies-website.jpg" alt="" style={{ width: '100%', height: '220px' }} />
                            <h4 className='mt-3'>Android Developer</h4><br />
                            <h6>If you need a comfortable hotel, our operators will book it for you, and take a taxi to the
                                address</h6>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-4">
                        <div className="service text-center border-bottom border border-3 ">
                            <img src="https://thumbs.dreamstime.com/b/web-development-coding-programming-internet-technology-business-concept-web-development-coding-programming-internet-technology-100232725.jpg" alt="" style={{ width: '100%', height: '220px' }} />
                            <h4 className='mt-3'>Software Developer</h4><br />
                            <h6>If you need a comfortable hotel, our operators will book it for you, and take a taxi to the
                                address</h6>
                        </div>
                    </div>
                </div>
            </div>

            <article className="drive m-5">
                <h5 style={{ color: '#ffba00', fontSize: 'x-large', fontWeight: 800, marginTop: '60px', marginLeft: '30px' }}>
                    FOR You</h5>
                <h1 style={{ marginLeft: '30px', fontWeight: 800 }}>DO YOU WANT TO MAKE YOUR WEBSITE?</h1>
                <h6 style={{ marginLeft: '30px', marginTop: '30px', color: 'slategrey' }}>
                    Quisque sollicitudin feugiat risus, eu posuere <br />
                    ex euismod eu. Phasellus hendrerit, massa efficitur dapibus <br />
                    pulvinar, sapien eros sodales ante, euismod aliquet nulla metus a mauris.
                </h6>
                <div className="tick mt-4">
                    <div className="tick1">
                        <h5><FontAwesomeIcon icon={faCheck} className="check-icon ms-4 p-2" style={{ color: '#ffba00' }} />Hospital Management</h5>
                        <h5><FontAwesomeIcon icon={faCheck} className="check-icon ms-4 p-2" style={{ color: '#ffba00' }} />ERP System</h5>
                        <h5><FontAwesomeIcon icon={faCheck} className="check-icon ms-4 p-2" style={{ color: '#ffba00' }} />Hotel Managemenr</h5>
                    </div>
                    <div className="tick2">
                        <h5><FontAwesomeIcon icon={faCheck} className="check-icon ms-4 p-2" style={{ color: '#ffba00' }} />App Development</h5>
                        <h5><FontAwesomeIcon icon={faCheck} className="check-icon ms-4 p-2" style={{ color: '#ffd43b' }} />Tour & Travels</h5>
                        <h5><FontAwesomeIcon icon={faCheck} className="check-icon ms-4 p-2" style={{ color: '#ffba00' }} />Beauty parlour</h5>
                    </div>
                </div>
                <button className=" btn btn-success ms-5 p-2 mt-2" onClick={contactform} >Get Your Website</button>
            </article>
        </>
    );
}

export default About;
