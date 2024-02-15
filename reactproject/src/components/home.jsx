import React from 'react';

function Home() {
    return (
        <>
            <div className="bd-example" style={{ backgroundColor: '#F5F5F5' }}>
                <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                        <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src="https://media.istockphoto.com/id/1363746712/photo/video-streaming-on-internet-concept-businessman-watching-online-movie-or-tv-series-on-laptop.jpg?s=2048x2048&w=is&k=20&c=t3fXXCz-dIwGfnpgYBj6Vth3j0Kst2eHdiW9SOfM3i4=" className="d-block w-100" alt='' style={{ width: '100%', height: '500px' }}   />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="https://media.istockphoto.com/id/1448524907/photo/justice-lawyers-with-judge-gavel-businessman-in-suit-or-lawyer-working-on-a-documents-legal.jpg?s=2048x2048&w=is&k=20&c=1kxpNdpmuwXaYtj6A11RuCfVfDuVPcjcXXdvGYyMkJs=" className="d-block w-100" alt='' style={{ width: '100%', height: '500px' }}   />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src="https://media.istockphoto.com/id/1474491682/photo/web-3-0-will-be-the-next-era-of-the-internet-will-have-intelligence-in-analyzing-various.jpg?s=2048x2048&w=is&k=20&c=upCe_yjQyQB2eWuPe1-9zLVIgTB8FeS7akq1YbhZgzg=" className="d-block w-100" alt='' style={{ width: '100%', height: '500px' }}   />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </div>
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>
            </div>

            <div className='text-center p-3 '>
                <h1 className='font-weight-bold'>Achieve your business goals <span className='text-primary '>with <br /> web development solutions</span> </h1>
            </div>

            
                <div class="card-group px-5">
                    <div class="border border-1 card m-3">
                        <img class="card-img-top" src="https://media.istockphoto.com/id/1356110094/vector/content-management-system-cms-banner.jpg?s=612x612&w=0&k=20&c=HEJzWfRS0MiqBsysxJcG6frJDATwcpboMIIR4ERB9XY=" alt="" style={{ width: '100%', height: '250px' }} />
                        <div class="card-body">
                            <h5 class="card-title">Content Management System</h5>
                            <p class="card-text">A dedicated CMS designed to the specific needs of your business will save time and money by optimizing internal workflows.</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 2 hour ago</small>
                        </div>
                    </div>
                    <div class="border border-1 card m-3">
                        <img class="card-img-top" src="https://mconnectsolutions.com/wp-content/uploads/2021/07/Reasons-Full-Stack-Developer-Is-The-Best-Bet-For-Businesses.png" alt="" style={{ width: '100%', height: '250px' }} />
                        <div class="card-body">
                            <h5 class="card-title">Web Applications</h5>
                            <p class="card-text">Web applications can reach a global audience. They're interactive and engaging, so can easily hold users' attention.</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 3 hour ago</small>
                        </div>
                    </div>
                    <div class="border border-1 card m-3">
                        <img class="card-img-top" src="https://www.vocso.com/blog/wp-content/uploads/2022/02/eCommerce-Website-Features-1920-x-1080.jpg" alt="" style={{ width: '100%', height: '250px' }} />
                        <div class="card-body">
                            <h5 class="card-title">E-commerce</h5>
                            <p class="card-text">With eCommerce solutions, businesses can operate 24 hours a day, 7 days a week, and reach customers in any time zone.</p>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Last updated 1 hour ago</small>
                        </div>
                    </div>
                </div>

                <section className="container-parant">
            <div className="container mt-4">
                <h5 className="text-center mb-2" style={{ color: '#ffba00', fontWeight: 800 }}>SEE OURS</h5>
                <h1 className="text-center mb-2" style={{ fontWeight: 900 }}>Services</h1>

                <div className="row gx-4 gy-4 mt-3 mb-5 justify-content-center">
                    <div className="col-lg-3 col-md-6">
                        <div className="card border ">
                            <img src="https://media.licdn.com/dms/image/D4D12AQFDaEMn3_VvZw/article-cover_image-shrink_720_1280/0/1680600277270?e=2147483647&v=beta&t=-aeQ4OCFV8A54VdfowyASvn6Bi9XUDvjbxsiVQOyI7w" className="card-img-top" alt="" />
                            <div className="card-body text-center">
                                <h3 className="card-title display-7">Frontend Development</h3>
                                <p className="card-text fs-6">We use the most popular frontend frameworks like React.js, Vue.js, and Angular that enable us to create the surface layer of your product.</p>
                                <h1 className="display-6">$40/hour</h1>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="card border ">
                            <img src="https://img.freepik.com/free-vector/app-development-banner_33099-1720.jpg" className="card-img-top" alt="" />
                            <div className="card-body text-center">
                                <h3 className="card-title display-7">Backend Development</h3>
                                <p className="card-text fs-6">We use the most popular frontend frameworks like React.js, Vue.js, and Angular that enable us to create the surface layer of your product.</p>
                                <h1 className="display-6">$50/hour</h1>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="card border card-third position-relative">
                            <img src="https://bairesdev.mo.cloudinary.net/blog/2021/12/web-development.jpg" className="card-img-top" alt="" />
                            <div className="card-body text-center">
                                <h3 className="card-title display-7">Full Stack Development</h3>
                                <p className="card-text fs-6">We use the most popular frontend frameworks like React.js, Vue.js, and Angular that enable us to create the surface layer of your product.</p>
                                <h1 className="display-6">$70/hour</h1>
                            </div>
                            <div className="triangle"></div>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6">
                        <div className="card border ">
                            <img src="https://img.freepik.com/free-vector/website-development-banner_33099-1687.jpg" className="card-img-top" alt="" />
                            <div className="card-body text-center">
                                <h3 className="card-title display-7">Cloud <br /> Development</h3>
                                <p className="card-text fs-6">We use the most popular frontend frameworks like React.js, Vue.js, and Angular that enable us to create the surface layer of your product .</p>
                                <h1 className="display-6">$80/hour</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
            
        </>
    );
}

export default Home;
