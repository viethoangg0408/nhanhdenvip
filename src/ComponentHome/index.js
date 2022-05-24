import React from "react"
import { Link } from "react-router-dom"
import Footer from "./Footer"
import Header from "./Header"

function HomeIndex() {
    return(
        <>
            <Header/>
            <div className="main-banner">
                <div className="title-banner mt-50 mb-50">
                    <h1>TRANG WEB CỦA TÔI</h1>
                </div>
                <div className="slide-banner">
                    <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="https://static.wixstatic.com/media/81b70d7ce345435e925292827ad60ee5.jpg/v1/fill/w_1680,h_1113,al_c,q_85,usm_0.66_1.00_0.01/81b70d7ce345435e925292827ad60ee5.jpg" className="d-block w-100" alt="..."/>
                            </div>
                            <div className="carousel-item">
                                <img src="https://static.wixstatic.com/media/84af9c03ad46492db57f86b098920b43.jpg/v1/fill/w_3360,h_2288,al_c,q_90,usm_0.66_1.00_0.01/84af9c03ad46492db57f86b098920b43.jpg" className="d-block w-100" alt="..."/>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="main-aboutUs">
                <div className="title-banner mt-50 mb-50">
                    <h2>ABOUT US</h2>
                </div>
                <p className="text-center fz-16">Precision. Punctuality. Professionalism.</p>
                <div className="mt-20 text-center fz-16" style={{ width: 700, margin: "0 auto" }}>
                    Trang web của tôi serves as a leading Công ty xây dựng bãi đỗ xe in the San Francisco area. 
                    We’re a team of fully-certified professionals who tackle everything from complex large projects 
                    to smaller scale jobs. Fueled by our commitment to excellence, we go the extra mile to make sure 
                    clients are completely satisfied with our work. Call us today to schedule a consultation.
                </div>
                <div className="img-aboutUs mt-30">
                    <img src="https://static.wixstatic.com/media/93329f34d0d44f7b8c3b2234ff583a8d.jpg/v1/fill/w_3360,h_1150,fp_0.50_0.50,q_90,usm_0.66_1.00_0.01,enc_auto/93329f34d0d44f7b8c3b2234ff583a8d.jpg"/>
                </div>
            </div>
            <div className="main-product mt-80 ml-50 mr-50 mb-100">
                <div className="row">
                    <div className="col-4">
                        <div className="main-product-item">
                            <Link to="/home/product">
                                <div className="product-img">
                                    <img src="https://static.wixstatic.com/media/fa404b9bd5ba4f398c364c667120d128.jpg/v1/fill/w_940,h_940,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01/fa404b9bd5ba4f398c364c667120d128.webp"/>
                                </div>
                                <div className="product-content">
                                    <div className="product-content_name">
                                        Garage Design Consultation
                                    </div>
                                    <div className="product-content_price">
                                        19,99$
                                    </div>
                                    <div className="product-content_btn">
                                        <button>Đặt ngay</button>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="main-contact">
                <div className="container">
                    <div className="title-banner pt-50 mb-50">
                        <h2>ABOUT US</h2>
                    </div>
                    <div className="contact-form">
                        <form>
                            <div className="contact-form_item">
                                <label>Tên *</label>
                                <input placeholder="Nhập tên của bạn"/>
                            </div><br/>
                            <div className="contact-form_item">
                                <label>Email *</label>
                                <input placeholder="Nhập email của bạn"/>
                            </div><br/>
                            <div className="contact-form_item">
                                <label>Tiêu đề *</label>
                                <input placeholder="Nhập chủ đề"/>
                            </div><br/>
                            <div className="contact-form_item">
                                <label>Tin nhắn *</label>
                                <textarea placeholder="Nhập tin nhắn của bạn ở đây..."/>
                            </div><br/>
                            <div className="contact-form_item">
                                <button>Gửi</button>
                            </div>
                        </form>
                    </div>  
                </div>
            </div>
            <div className="mt-80">
                {/* <iframe src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d956865.8753656336!2d105.36145520186099!3d20.47515808699761!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d19.929028799999998!2d105.86425969999999!4m5!1s0x3135ab96b04c86bb%3A0x6efbf28cb885715f!2zVGjDoXAgSMOgIE7hu5lpLCA0OSBQLiBIYWkgQsOgIFRyxrBuZywgVHLhuqduIEjGsG5nIMSQ4bqhbywgSG_DoG4gS2nhur9tLCBIw6AgTuG7mWk!3m2!1d21.0257026!2d105.84618499999999!5e0!3m2!1svi!2s!4v1653404769680!5m2!1svi!2s" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
            </div>
            <div className="main-testimonials">
                <div className="container">
                    <div className="title-banner pt-50 mb-50">
                        <h2>TESTIMONIALS</h2>
                    </div>
                    <p className="fz-18 mt-30 mb-70 text-center">Quality Service = Outstanding Results</p>
                    <div className="row">
                        <div className="col-4">
                            <div className="main-testimonials_item text-center">
                                <div className="svg">
                                    <svg preserveAspectRatio="xMidYMid meet" width="50" height="50" data-bbox="48.8 51 102.4 98.1" xmlns="http://www.w3.org/2000/svg" viewBox="48.8 51 102.4 98.1" role="presentation" aria-hidden="true">
                                        <g>
                                            <path d="M89.9 51H51.6c-1.5 0-2.8 1.2-2.8 2.8v38.3c0 1.5 1.2 2.8 2.8 2.8h18.1c-.2 4.3-.9 9.1-3.2 15.2-2.3 5.9-11.1 13.1-16.3 16.2-.9.5-1.4 1.4-1.4 2.4v17.6c0 .9.5 1.8 1.3 2.3.5.3 1 .5 1.5.5.4 0 .8-.1 1.1-.2 9.1-4 16.7-9.4 22.6-15.9 5.8-6.5 10.2-13.8 13.1-21.6 2.9-7.8 4.3-19.1 4.3-33.7V53.8c0-1.5-1.2-2.8-2.8-2.8zm-2.8 26.6c0 13.9-1.3 24.6-4 31.8-2.6 7.1-6.7 13.8-12 19.8-4.5 5-10.1 9.3-16.7 12.7v-11.6c4.7-3 14.3-10.5 17.3-18.1 3.2-8.3 3.6-14.7 3.6-20 0-1.5-1.2-2.8-2.8-2.8H54.4V56.6h32.7v21z"></path>
                                            <path d="M148.4 51h-38.3c-1.5 0-2.8 1.2-2.8 2.8v38.3c0 1.5 1.2 2.8 2.8 2.8h18.1c-.2 4.3-.9 9.1-3.2 15.2-2.3 5.9-11.1 13.1-16.3 16.2-.9.5-1.4 1.4-1.4 2.4v17.6c0 .9.5 1.8 1.3 2.3.5.3 1 .5 1.5.5.4 0 .8-.1 1.1-.2 9.1-4 16.7-9.4 22.6-15.9 5.8-6.5 10.2-13.8 13.1-21.6 2.9-7.8 4.3-19.1 4.3-33.7V53.8c0-1.5-1.3-2.8-2.8-2.8zm-2.8 26.6c0 13.9-1.3 24.6-4 31.8-2.6 7.1-6.7 13.8-12 19.8-4.5 5-10.1 9.3-16.7 12.7v-11.6c4.7-3 14.3-10.5 17.3-18.1 3.2-8.3 3.6-14.7 3.6-20 0-1.5-1.2-2.8-2.8-2.8h-18.1V56.6h32.7v21z"></path>
                                        </g>
                                    </svg>
                                </div>
                                <div className="main-testimonials_content mt-50 ml-30 mr-30">
                                    <span className="fz-18">
                                        This is your Testimonial quote. Use this space to share reviews 
                                        about you, your services or your business. Get site visitors excited 
                                        to jump into action with you!
                                    </span>
                                    <div className="mt-30 fz-18">
                                        Kris Michaels
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="main-testimonials_item text-center">
                                <div className="svg">
                                    <svg preserveAspectRatio="xMidYMid meet" width="50" height="50" data-bbox="48.8 51 102.4 98.1" xmlns="http://www.w3.org/2000/svg" viewBox="48.8 51 102.4 98.1" role="presentation" aria-hidden="true">
                                        <g>
                                            <path d="M89.9 51H51.6c-1.5 0-2.8 1.2-2.8 2.8v38.3c0 1.5 1.2 2.8 2.8 2.8h18.1c-.2 4.3-.9 9.1-3.2 15.2-2.3 5.9-11.1 13.1-16.3 16.2-.9.5-1.4 1.4-1.4 2.4v17.6c0 .9.5 1.8 1.3 2.3.5.3 1 .5 1.5.5.4 0 .8-.1 1.1-.2 9.1-4 16.7-9.4 22.6-15.9 5.8-6.5 10.2-13.8 13.1-21.6 2.9-7.8 4.3-19.1 4.3-33.7V53.8c0-1.5-1.2-2.8-2.8-2.8zm-2.8 26.6c0 13.9-1.3 24.6-4 31.8-2.6 7.1-6.7 13.8-12 19.8-4.5 5-10.1 9.3-16.7 12.7v-11.6c4.7-3 14.3-10.5 17.3-18.1 3.2-8.3 3.6-14.7 3.6-20 0-1.5-1.2-2.8-2.8-2.8H54.4V56.6h32.7v21z"></path>
                                            <path d="M148.4 51h-38.3c-1.5 0-2.8 1.2-2.8 2.8v38.3c0 1.5 1.2 2.8 2.8 2.8h18.1c-.2 4.3-.9 9.1-3.2 15.2-2.3 5.9-11.1 13.1-16.3 16.2-.9.5-1.4 1.4-1.4 2.4v17.6c0 .9.5 1.8 1.3 2.3.5.3 1 .5 1.5.5.4 0 .8-.1 1.1-.2 9.1-4 16.7-9.4 22.6-15.9 5.8-6.5 10.2-13.8 13.1-21.6 2.9-7.8 4.3-19.1 4.3-33.7V53.8c0-1.5-1.3-2.8-2.8-2.8zm-2.8 26.6c0 13.9-1.3 24.6-4 31.8-2.6 7.1-6.7 13.8-12 19.8-4.5 5-10.1 9.3-16.7 12.7v-11.6c4.7-3 14.3-10.5 17.3-18.1 3.2-8.3 3.6-14.7 3.6-20 0-1.5-1.2-2.8-2.8-2.8h-18.1V56.6h32.7v21z"></path>
                                        </g>
                                    </svg>
                                </div>
                                <div className="main-testimonials_content mt-50 ml-30 mr-30">
                                    <span className="fz-18">
                                        This is your Testimonial quote. Use this space to share reviews 
                                        about you, your services or your business. Get site visitors excited 
                                        to jump into action with you!
                                    </span>
                                    <div className="mt-30 fz-18">
                                        Kris Michaels
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="main-testimonials_item text-center">
                                <div className="svg">
                                    <svg preserveAspectRatio="xMidYMid meet" width="50" height="50" data-bbox="48.8 51 102.4 98.1" xmlns="http://www.w3.org/2000/svg" viewBox="48.8 51 102.4 98.1" role="presentation" aria-hidden="true">
                                        <g>
                                            <path d="M89.9 51H51.6c-1.5 0-2.8 1.2-2.8 2.8v38.3c0 1.5 1.2 2.8 2.8 2.8h18.1c-.2 4.3-.9 9.1-3.2 15.2-2.3 5.9-11.1 13.1-16.3 16.2-.9.5-1.4 1.4-1.4 2.4v17.6c0 .9.5 1.8 1.3 2.3.5.3 1 .5 1.5.5.4 0 .8-.1 1.1-.2 9.1-4 16.7-9.4 22.6-15.9 5.8-6.5 10.2-13.8 13.1-21.6 2.9-7.8 4.3-19.1 4.3-33.7V53.8c0-1.5-1.2-2.8-2.8-2.8zm-2.8 26.6c0 13.9-1.3 24.6-4 31.8-2.6 7.1-6.7 13.8-12 19.8-4.5 5-10.1 9.3-16.7 12.7v-11.6c4.7-3 14.3-10.5 17.3-18.1 3.2-8.3 3.6-14.7 3.6-20 0-1.5-1.2-2.8-2.8-2.8H54.4V56.6h32.7v21z"></path>
                                            <path d="M148.4 51h-38.3c-1.5 0-2.8 1.2-2.8 2.8v38.3c0 1.5 1.2 2.8 2.8 2.8h18.1c-.2 4.3-.9 9.1-3.2 15.2-2.3 5.9-11.1 13.1-16.3 16.2-.9.5-1.4 1.4-1.4 2.4v17.6c0 .9.5 1.8 1.3 2.3.5.3 1 .5 1.5.5.4 0 .8-.1 1.1-.2 9.1-4 16.7-9.4 22.6-15.9 5.8-6.5 10.2-13.8 13.1-21.6 2.9-7.8 4.3-19.1 4.3-33.7V53.8c0-1.5-1.3-2.8-2.8-2.8zm-2.8 26.6c0 13.9-1.3 24.6-4 31.8-2.6 7.1-6.7 13.8-12 19.8-4.5 5-10.1 9.3-16.7 12.7v-11.6c4.7-3 14.3-10.5 17.3-18.1 3.2-8.3 3.6-14.7 3.6-20 0-1.5-1.2-2.8-2.8-2.8h-18.1V56.6h32.7v21z"></path>
                                        </g>
                                    </svg>
                                </div>
                                <div className="main-testimonials_content mt-50 ml-30 mr-30">
                                    <span className="fz-18">
                                        This is your Testimonial quote. Use this space to share reviews 
                                        about you, your services or your business. Get site visitors excited 
                                        to jump into action with you!
                                    </span>
                                    <div className="mt-30 fz-18">
                                        Kris Michaels
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default HomeIndex