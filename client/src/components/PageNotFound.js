import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom';

class PageNotFound extends Component {
    render() {
        return (
            <Fragment>
                <section className="service-area section-padding">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 col-md-8 offset-lg-2 offset-md-2">
                                <div className="section-title text-center section-title-padding">
                                    <h2 className="text-white">Oops 404 page not found!</h2>
                                    <Link to="/">Go to home</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        );
    }
}
export default PageNotFound;