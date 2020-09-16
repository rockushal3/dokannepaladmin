import React, { Component } from 'react';
import axios from 'axios'
import { Link, withRouter, Redirect } from 'react-router-dom'
import { Line } from 'react-chartjs-2'

class Home extends Component {
    constructor(props) {
        super(props)
       
    this.state={
        data:{
          labels:this.props.trendsdate,
        datasets:[
       {
          label:"trends",
          backgroundColor:"rgba(44, 130, 201, 1)",
          data:this.props.trendsvalue
        },
        ]
      }
    }
}
    render() {
        const regions = this.props.place.map((regionn, index) => {
            return (
                <>
                <h4 class="small font-weight-bold">{regionn.geoName} <span class="float-right">{regionn.value[0]}</span></h4>
                                <div class="progress mb-4">
                                    <div class="progress-bar bg-primary" role="progressbar" style={{ width: regionn.value[0]+"%" }} aria-valuenow="20" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                                </>
            )
        })
        return (
            <div class="container-fluid">

                <div class="d-sm-flex align-items-center justify-content-between mb-4">
        <h1 class="h3 mb-0 text-gray-800">Analysis of {this.props.user}</h1>
                </div>
                <div class="row">

<div class="col-lg-10 offset-1 mb-4">
    <h1>Interest over time</h1>
<Line 
data={this.state.data}
/>    
</div>
</div>
                <div class="row">

                    <div class="offset-3 col-lg-6 mb-4">

                        <div class="card shadow mb-4">
                            <div class="card-header py-3">
                                <h6 class="m-0 font-weight-bold text-primary">Interest by Region </h6>
                            </div>
                            <div class="card-body">

                                {regions}   
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Home);