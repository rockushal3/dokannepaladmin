import React, { Component } from 'react';
import axios from 'axios'
import { Link, withRouter, Redirect } from 'react-router-dom'

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
        orders: []
    }
}

componentDidMount() {
    axios.get('http://localhost:3030/api/getorder')
        .then((response) => {
            this.setState({
              orders: response.data
              })
              console.log(response.data)
            
        }).catch((err) =>{
            console.log(err)
        })
    }

    
    updates =(id)=> {
      var updates={isDelivered:true,
      isPaid:true}
      axios.put("http://localhost:3030/api/order/"+id,updates).then((response) => {
        this.setState({
          success_message: true
          
        }) 
        window.location.reload();

      }).catch(function (e) {
      })
    }

    render() {
      const products = this.state.orders.map((products, index) => {
        return (
          <tr>
          <td>{products.userid.firstname+" "+ products.userid.lastname}</td>
          <td>{products.shippingAddress.fullname}<br/>{products.shippingAddress.phonenumber}<br/>{
          products.shippingAddress.city+","+products.shippingAddress.address+","+products.shippingAddress.zone
          }</td>
          <td>{products.productid.product_name}</td>
        <td><img src={"http://localhost:3030/public/images/products/"+products.productid._id+"/"+ products.productid.image[0]} className="img-responsive" width="100px"/></td>
          <td>
            {products.isDelivered?<p className="text-success"><i class="fas fa-check "></i> Delivery Completed</p>:<>
          <a onClick={this.updates.bind(this,products._id)} className="text-success"><i class="fas fa-check "></i></a> 
                    <a className="m-2 text-danger"><i class="fas fa-close"></i></a>
                    </>
        }
          </td>
          
        </tr>
            
        )
    })
       return(
        <div class="container-fluid">
        <div className="row">
            <div className ="col-md-6">
        <h1 class="h3 mb-2 text-gray-800">Order</h1>
        </div>
        <div className="col-md-6">
        </div>
        </div>
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Order List</h6>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                <thead>
                  <tr>
                    <th>User Name</th>
                    <th>Shipping Address</th>
                    <th>Product Name</th>
                    <th>Product Image</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                  <th>User Name</th>
                    <th>Shipping Address</th>
                    <th>Product Name</th>
                    <th>Product Image</th>
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