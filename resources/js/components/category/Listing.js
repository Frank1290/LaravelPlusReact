import React, { Component } from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { Link } from "react-router-dom";

export default class Listing extends Component {
    constructor() {
        super();
        this.state = {
            categories: [],
            loading: false
        };
        this.onDelete = this.onDelete.bind(this);
    }
    // Component lifecycle

    getCategory() {
        axios.get("http://localhost:8000/category").then(response => {
            this.setState({ loading: false, categories: response.data });
        });
    }

    componentDidMount() {
        this.getCategory();
    }
    // component lifecycle ends
    onDelete(category_id) {
        this.setState({ loading: true });
        axios
            .delete(`http://localhost:8000/category/delete/${category_id}`)
            .then(response => {
                this.getCategory();
            });
    }
    

    render() {
        return (
            <div>
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Category</th>
                                <th>Status</th>
                                <th>Created At</th>
                                <th>Updated At</th>
                                <th>Action At</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.categories.map(category => {
                                return (
                                    <tr>
                                        <th>{category.name}</th>
                                        <th>{category.active}</th>
                                        <th>{category.created_at}</th>
                                        <th>{category.updated_at}</th>
                                        <th>
                                            {this.state.loading ? (
                                                "Loading..."
                                            ) : (
                                                <button
                                                    onClick={() =>
                                                        this.onDelete(
                                                            category.id
                                                        )
                                                    }
                                                >
                                                    Delete
                                                </button>
                                            )}
                                            <Link
                                                to={`category/edit/${category.id}`}
                                            >
                                                Edit
                                            </Link>
                                        </th>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}
