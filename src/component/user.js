import React, { Component } from 'react';
import axios from 'axios'
import { Link, withRouter, Redirect } from 'react-router-dom'

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
        users: []
    }
}
delete =(id)=> {
  axios.delete("http://localhost:3030/api/user/"+id).then((response) => {
    this.setState({
      success_message: true
      
    }) 
    window.location.reload();

  }).catch(function (e) {
  })
}
componentDidMount() {
    axios.get('http://localhost:3030/api/allusers')
        .then((response) => {
            this.setState({
              users: response.data
              })
              console.log(response.data)
            
        }).catch((err) =>{
            console.log(err)
        })
    }
    render() {
      const products = this.state.users.map((products, index) => {
        return (
          <tr>
                    <td>{products.firstname+" " +products.lastname}</td>
        <td>{products.email}</td>
                    <td>
                    <a  onClick={this.delete.bind(this,products._id)}className="m-2 text-danger"><i class="fas fa-trash"></i></a></td>
                  </tr>
            
        )
    })
       return(
        <div class="container-fluid">
        <div className="row">
            <div className ="col-md-6">
        <h1 class="h3 mb-2 text-gray-800">User</h1>
        </div>
        <div className="col-md-6">
        </div>
        </div>
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">User List</h6>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                  <th>Name</th>
                    <th>Email</th>
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