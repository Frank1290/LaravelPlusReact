import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Link, Route } from "react-router-dom";
import Aboutus from "./Aboutus";
import Contactus from "./Contactus";
import Home from "./Home";
import Category from "./category/Index";

export default class Header extends Component {
    render() {
        return (
            <Router>
                <div>
                    
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/aboutus">About Us</Link>
                                </li>
                                <li>
                                    <Link to="/contactus">Contact us</Link>
                                </li>
                                <li>
                                    <Link to="/category">Category</Link>
                                </li>
                            </ul>
                    

                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/aboutus">
                            <Aboutus />
                        </Route>
                        <Route exact path="/contactus">
                            <Contactus />
                        </Route>
                        <Route exact path="/category">
                            <Category />
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}
