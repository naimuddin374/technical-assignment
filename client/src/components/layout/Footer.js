import React, { Component, Fragment } from 'react'

class Footer extends Component {
    render() {
        return (
            <Fragment>
                <footer className="short-padding footerbg">
                    <div className="container">
                        <div className="row">

                            <div className="col-lg-4 col-md-6">
                                <div className="widget-content">
                                    <div className="widget-title">
                                        <h3>Task</h3>
                                    </div>
                                    <div className="widget-inner-content">
                                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt nesciunt in minus
                                accusantium fuga velit distinctio sunt odio unde! Saepe.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="widget-content">
                                    <div className="widget-title">
                                        <h3>Contact Us</h3>
                                    </div>
                                    <div className="widget-inner-content">
                                        <div className="single-address">
                                            <div className="address-icon">
                                                <i className="fa fa-home"></i>
                                            </div>
                                            <div className="widhet-address-text">
                                                <p>106, Gulshan-2, Dhaka-1216, Bangladesh</p>
                                            </div>
                                        </div>
                                        <div className="single-address">
                                            <div className="address-icon">
                                                <i className="fa fa-envelope-o" aria-hidden="true"></i>
                                            </div>
                                            <div className="widhet-address-text">
                                                <p>contact@info.com</p>
                                            </div>
                                        </div>
                                        <div className="single-address">
                                            <div className="address-icon">
                                                <i className="fa fa-phone"></i>
                                            </div>
                                            <div className="widhet-address-text">
                                                <p>++88083244982342</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-lg-4 col-md-6">
                                <div className="widget-content">
                                    <div className="widget-title">
                                        <h3>Subscribe</h3>
                                    </div>
                                    <div className="widget-inner-content">
                                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, nobis.</p>
                                        <form action="#" className="subscribe-form mt-3">
                                            <input type="text" placeholder="Enter Your Email" className="subscribe-field" />
                                            <button className="sub-btn btn" type="submit"><i className="fa fa-paper-plane"></i></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                <div className="footer-bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 col-md-12 text-center">
                                <p className="copy-right-text">Copyright &copy; 2020 <a href="#blank">Task</a> All Rights Reserved</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}
export default Footer