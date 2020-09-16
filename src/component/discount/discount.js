import React, { Component } from 'react';
import axios from 'axios'
import { Link, withRouter, Redirect } from 'react-router-dom'
import discount from '../../container/discount/discount';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
        discount: []
    }
}

componentDidMount() {
    axios.get('http://localhost:3030/api/discount')
        .then((response) => {
            this.setState({
                discount: response.data.discounts
              })
              console.log(this.state.discount)
            
        }).catch((err) =>{
            console.log(err)
        })
        
    }

    tripdelete =(id)=> {
      axios.delete("http://localhost:3030/api/discount/"+id).then((response) => {
        this.setState({
          success_message: true
          
        }) 
        window.location.reload();

      }).catch(function (e) {
      })
    }
    render() {
      const discounts = this.state.discount.map((discounts, index) => {
        return (
          <tr>
          <td>{discounts.discount_name}</td>
        <td>{discounts.discount_value}</td>
          <td><a href={"/editdiscount/"+ discounts._id} className="text-primary"><i class="fas fa-edit "></i></a> 
          <a onClick={this.tripdelete.bind(this,discounts._id)} className="m-2 text-danger"><i class="fas fa-trash"></i></a></td>
        </tr>
            
        )
    })
       return(
        <div class="container-fluid">
       <div class="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 class="h3 mb-0 text-gray-800">Discount</h1>
          <a href="/adddiscount" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i class="fas fa-plus fa-sm text-white-50"></i> Add Discount</a>
        </div>
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Discunt List</h6>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                <thead>
                  <tr>
                    <th>Discunt</th>
                    <th>Amount</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                  <th>Discunt</th>
                    <th>Amount</th>
                    <th>Action</th>
                  </tr>
                </tfoot>
                <tbody>
                 {discounts}
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