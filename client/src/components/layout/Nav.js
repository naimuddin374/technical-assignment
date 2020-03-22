import React, { Component, Fragment } from 'react'
import { Link, NavLink } from 'react-router-dom';

class Nav extends Component {
    render() {
        return (
            <Fragment>
                <nav className="navbar navbar-expand-lg fixed-top navbar-light header-area bg-dark">
                    <div className="container">
                        <Link to='/' className="navbar-brand text-white">
                            <h2 className="text-white">LOGO</h2>
                        </Link>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navtogglerItemItem"
                            aria-controls="navtogglerItemItem" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navtogglerItemItem">
                        </div>
                    </div>
                </nav>
            </Fragment>
        )
    }
}
export default Nav