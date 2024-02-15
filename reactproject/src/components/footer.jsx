import React from 'react';

function Footer() {
    return (
        <>
            <section id="block-footer " style={{ backgroundColor: '#e3f2fd' }}>
                <div className="container p-5">
                    <div className="row">
                        <div className="col-md-4 col-sm-6">
                            <div className="footer-widget-area">
                                <div className="widget widget_text p-3">
                                    <h4 className="heading-color">About Us</h4>
                                    <div className="textwidget mt-4">
                                    Whether you’re an entrepreneur or the leader of a start-up or a large company, there will be important strategic goals tied to the success of your future digital product. 
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 col-sm-6">
                            <div className="footer-widget-area">
                                <div className="widget widget_nav_menu p-3">
                                    <h4 className="heading-color">Explore</h4>
                                    <div className="menu-footer-menu-container mt-4">
                                        <div className="row">
                                            <div className="col-sm-6">
                                                <ul className="menu menu-footer-menu-ul">
                                                    <li className="menu-footer-menu-li">&raquo; Gallery</li>
                                                    <li className="menu-footer-menu-li">&raquo; UI designers</li>
                                                    <li className="menu-footer-menu-li">&raquo; UX designers</li>
                                                    <li className="menu-footer-menu-li">&raquo; Frontend developers</li>
                                                </ul>
                                            </div>
                                            <div className="col-sm-6">
                                                <ul className="menu menu-footer-menu-ul">
                                                    <li className="menu-footer-menu-li">&raquo; Backend developers </li>
                                                    <li className="menu-footer-menu-li">&raquo; DevOps engineers</li>
                                                    <li className="menu-footer-menu-li">&raquo; QA specialist</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-3 col-sm-6">
                            <div className="footer-widget-area">
                                <div className="widget widget_text p-3">
                                    <h4 className="heading-color">Contact us</h4>
                                    <div className="textwidget mt-4">
                                        <strong>Address:</strong>
                                        43 2-nd Avenue, New York, NY 29004-7153
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Footer section end */}

            {/* bottom footer block start */}
            <footer className="footer-block p-2" style={{ backgroundColor: '#696969' }}>
                <div className="container text-center">
                    <p>2017 © All Rights Reserved T & C Apply</p>
                </div>
            </footer>
        </>
    );
}

export default Footer;
