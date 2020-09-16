import React, { Component } from 'react';
import axios from 'axios'
import { Link, withRouter, Redirect } from 'react-router-dom'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
        product: []
    }
}

componentDidMount() {
    axios.get('http://localhost:3030/api/allproduct')
        .then((response) => {
            this.setState({
              product: response.data
              })
              console.log(response.data)

            
        }).catch((err) =>{
            console.log(err)
        })
        
    }

    delete =(id)=> {
      axios.delete("http://localhost:3030/api/product/"+id).then((response) => {
        this.setState({
          success_message: true
          
        }) 
        window.location.reload();

      }).catch(function (e) {
      })
    }
    render() {
      const products = this.state.product.map((products, index) => {
        return (
          <tr>
          <td>{products.product_name}</td>
          <td>{products.brand}</td>
          <td>{products.category_id.category_name}</td>
          <td>{products.price}</td>
        <td>{products.detail}</td>
        <td><img src={"http://localhost:3030/public/images/products/"+products._id+"/"+ products.image[0]} className="img-responsive" width="100px"/></td>
          <td>
          <a onClick={this.delete.bind(this,products._id)} className="m-2 text-danger"><i class="fas fa-trash"></i></a>
          <a href={"/analytic/"+ products.product_name} className="text-warning"> <i class="fas fa-chart-bar"></i></a>
          </td>
          
        </tr>
            
        )
    })
       return(
        <div class="container-fluid">
        <div class="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 class="h3 mb-0 text-gray-800">Product</h1>
          <a href="/addproduct" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i class="fas fa-plus  fa-sm text-white-50"></i> Add Product</a>
        </div>
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Product List</h6>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Brand</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Image</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                  <th>Name</th>
                    <th>Brand</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Description</th>
                    <th>Image</th>
                    <th>Action</th>
                  </tr>
                </tfoot>
                <tbody>
                 {products}
                 
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </div>
       )
    }
}

export default withRouter(Home);