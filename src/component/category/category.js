import React, { Component } from 'react';
import axios from 'axios'
import { Link, withRouter, Redirect } from 'react-router-dom'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
        category: []
    }
}

componentDidMount() {
    axios.get('http://localhost:3030/api/category')
        .then((response) => {
            this.setState({
                category: response.data.categories
              })
              console.log(this.state.category)
            
        }).catch((err) =>{
            console.log(err)
        })
        
    }

    tripdelete =(id)=> {
      axios.delete("http://localhost:3030/api/category/"+id).then((response) => {
        this.setState({
          success_message: true
          
        }) 
        window.location.reload();

      }).catch(function (e) {
      })
    }
    render() {
      const categorys = this.state.category.map((categorys, index) => {
        return (
          <tr>
          <td>{categorys.category_name}</td>
          <td><img src={"http://localhost:3030/public/images/categories/"+ categorys.image} className="img-responsive" width="100px"/></td>
          <td><a href={"/editcategory/"+ categorys._id} className="text-primary"><i class="fas fa-edit "></i></a> 
          <a onClick={this.tripdelete.bind(this,categorys._id)} className="m-2 text-danger"><i class="fas fa-trash"></i></a></td>
        </tr>
            
        )
    })
       return(
        <div class="container-fluid">
       <div class="d-sm-flex align-items-center justify-content-between mb-4">
          <h1 class="h3 mb-0 text-gray-800">Category</h1>
          <a href="/addcategory" class="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i class="fas fa-plus fa-sm text-white-50"></i> Add Category</a>
        </div>
        <div class="card shadow mb-4">
          <div class="card-header py-3">
            <h6 class="m-0 font-weight-bold text-primary">Category List</h6>
          </div>
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                <thead>
                  <tr>
                    <th>Category</th>
                    <th>Image</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                  <th>Category</th>
                    <th>Image</th>
                    <th>Action</th>
                  </tr>
                </tfoot>
                <tbody>
                 {categorys}
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