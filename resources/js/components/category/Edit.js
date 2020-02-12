import React, { Component } from "react";
import ReactDOM from "react-dom";
import Axios from "axios";

export default class Edit extends Component {
    constructor(props) {
        super(props);
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
            response => {
                console.log(response.data);
            }
        );
        this.setState({ category_name: "" });
        // this.props.history.push("/Listing");
    }
    componentDidMount() {
        Axios.get(
            "http://localhost:8000/category/edit/" + this.props.match.params.id
        ).then(function(response) {
            this.setState({ category_name: response.data.name });
        });
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
