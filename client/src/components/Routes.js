import React, { Component, Fragment } from 'react'
import { Route, Switch } from 'react-router-dom'

/*************************Import Layout********************************/
import Home from './Home';
import PageNotFound from './PageNotFound';
import AlertMessage from './layout/AlertMessage';
import Nav from './layout/Nav';



class Routes extends Component {
    render() {
        return (
            <Fragment>
                <AlertMessage />
                <Nav />
                <Switch>
                    <Route path='/' exact component={Home} history={this.props.history} />
                    <Route path='/*' exact component={PageNotFound} history={this.props.history} />
                </Switch>
            </Fragment >
        )
    }
}
export default Routes