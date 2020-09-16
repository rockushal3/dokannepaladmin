import React, { Component } from 'react';
import axios from 'axios'
import { Link, withRouter, Redirect } from 'react-router-dom'
import discount from '../../container/discount/discount';

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            success_message: '',
            error: '',
            redirect:false,
            
        }
        this.state = {
            category:[],
            image: {},
            category_id:'',
            price:'',
            name:'',
            detail:'',
            brand:'',
        }
    }

    componentDidMount() {
       

            axios.get('http://localhost:3030/api/category')
        .then((response) => {
            this.setState({
                category: response.data.categories
              })
            
        }).catch((err) =>{
            console.log(err)
        })
            
        }
        handleSelectChange = (event) => {
          this.setState({
            category_id: event.target.value
          })
        }
        sendData = () => {
            let formdata = new FormData();
            formdata.append('image', this.state.image[0])
            formdata.append('category', this.state.category_id)
            formdata.append('name', this.state.name)
            formdata.append('brand', this.state.brand)
            formdata.append('detail', this.state.detail)
            formdata.append('price', this.state.price)
            console.log(this.state.category_id)
            axios.post('http://localhost:3030/api/product', formdata).then((response) => {
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
        const categorys = this.state.category.map((categorys, index) => {
            return (
            <option value={categorys._id}>{categorys.category_name}</option>
            )
        })
        return (
            <div class="container-fluid">
                <div class="d-sm-flex align-items-center justify-content-between mb-4">
                    <h1 class="h3 mb-0 text-gray-800">Add Product</h1>
                </div>
                <div className="row">
                    <div className="col-md-6">
                        <form>
                            <div class="form-group">
                                <label for="exampleInputEmail1">Product Name</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" value={this.state.name} onChange={(event) =>
                                    this.setState({ name: event.target.value })} placeholder="Enter Name" />
                                <label for="exampleInputEmail1">Brand</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" value={this.state.brand} onChange={(event) =>
                                    this.setState({ brand: event.target.value })} placeholder="Enter Brand" />
                                     <label for="exampleFormControlSelect1">Category</label>
                                <select class="form-control" name="category_id"  onChange={this.handleSelectChange} id="exampleFormControlSelect1">
                                   <option>please select</option>
                                    {categorys}
                                </select>
                                <label for="exampleInputEmail1">Price</label>
                                <input type="text" class="form-control" id="exampleInputEmail1" value={this.state.price} onChange={(event) =>
                                    this.setState({ price: event.target.value })} placeholder="Enter Price" />
                                <label for="exampleInputEmail1">Image</label>
                                <input type="file" class="form-control" onChange={(event) =>
                                    this.setState({ image: event.target.files })} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Image" multiple/>
                                    <label for="exampleInputEmail1">Price</label>
                                <textarea type="text" class="form-control" id="exampleInputEmail1" value={this.state.detail} onChange={(event) =>
                                    this.setState({ detail: event.target.value })} placeholder="Enter Description" ></textarea>
                            </div>
                            <button type="button" onClick={this.sendData} className="btn btn-primary m-2">Submit</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Category);