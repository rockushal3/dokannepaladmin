import React, { Component } from 'react';
import axios from 'axios'
import { Link, withRouter, Redirect } from 'react-router-dom'

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false,
            error: ''
        }
        this.state = {
            name: '',
            value: '',
        }
    }

    sendUser = () => {
        axios.post('http://localhost:3030/api/discount', this.state).then((response) => {
            this.setState({
                redirect: true
            })

            window.location.reload();

        }).catch(function () {
        })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to='/discount' />
        }
        return (
            <div class="container-fluid">
                <div class="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 class="h3 mb-0 text-gray-800">Add Discount</h1>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <form>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Discount</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" value={this.state.name} onChange={(event) =>
                                    this.setState({ name: event.target.value })} placeholder="Enter name" />
                                <label for="exampleInputEmail1">Amount</label>
                                <input type="number" class="form-control"  value={this.state.value} onChange={(event) =>
                                    this.setState({ value: event.target.value })}id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Amount" />
                            </div>
                            <button type="button" onClick={this.sendUser} className="btn btn-primary m-2">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Category);