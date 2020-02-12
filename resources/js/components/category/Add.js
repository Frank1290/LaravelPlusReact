import React, { Component } from "react";
import ReactDOM from "react-dom";
import Axios from "axios";
import { hashHistory } from "react-router-dom";

export default class Add extends Component {
    constructor() {
        super();
        this.state = {
            category_name: ""
        };
        this.categoryChangeName = this.categoryChangeName.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    categoryChangeName(e) {
        this.setState({ category_name: e.target.value });
    }
    onSubmit(e) {
        e.preventDefault();
        const category = {
            category_name: this.state.category_name
        };
        Axios.post("http://localhost:8000/category/store", category).then(
            function(response) {
                console.log(response.data);
            }
        );
        this.setState({ category_name: "" });
        // this.props.history.push("/Listing");
    }

    render() {
        return (
            <div className="container">
                <form role="form" onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Category:</label>
                        <input
                            type="text"
                            className="form-control"
                            name="category_name"
                            placeholder="Enter category"
                            value={this.state.category_name}
                            onChange={this.categoryChangeName}
                        />
                    </div>

                    <button type="submit" className="btn btn-success">
                        Submit
                    </button>
                </form>
            </div>
        );
    }
}
