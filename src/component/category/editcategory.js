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
            category: '',
            image: {},
        }
    }
    componentDidMount() {
        axios.get('http://localhost:3030/api/categorys/'+this.props.categoryid)
            .then((response) => {
                this.setState({
                    category: response.data.category_name
                  })
                  console.log(response.data)
                
            }).catch((err) =>{
                console.log(err)
            })
            
        }
    sendUser = () => {
        let formdata = new FormData();
        formdata.append('image', this.state.image[0])
        formdata.append('category', this.state.category)
        axios.put('http://localhost:3030/api/category/'+this.props.categoryid, formdata).then((response) => {
            this.setState({
                redirect: true
            })

            window.location.reload();

        }).catch(function () {
        })
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to='/product' />
        }
        return (
            <div class="container-fluid">
                <div class="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 class="h3 mb-0 text-gray-800">Edit Category</h1>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <form>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Category</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" value={this.state.category} onChange={(event) =>
                                    this.setState({ category: event.target.value })} placeholder="Enter Category" />
                                <label for="exampleInputEmail1">Image</label>
                                <input type="file" class="form-control" onChange={(event) =>
                                    this.setState({ image: event.target.files })} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Image" />
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