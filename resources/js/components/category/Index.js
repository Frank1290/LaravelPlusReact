import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Add from "./Add";
import Listing from "./Listing";
import Edit from "./Edit";

export default class Index extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav className="navbar navbar-default">
                        <div className="container-fluid">
                            <div className="navbar-header"></div>
                            <ul className="nav navbar-nav">
                                <li>
                                    <Link to="/listing">Listing</Link>
                                </li>
                                <li>
                                    <Link to="/add">Add</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <Switch>
                        <Route exact path="/listing">
                            <Listing />
                        </Route>
                        <Route exact path="/add">
                            <Add />
                        </Route>
                        <Route exact path="/category/edit/:id" component={Edit} />
                       
                    </Switch>
                </div>
            </Router>
        );
    }
}
