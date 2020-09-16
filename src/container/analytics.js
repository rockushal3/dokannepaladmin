import React, { Component } from 'react';
import axios from 'axios'
import { Link, withRouter, Redirect } from 'react-router-dom'

import Sidebar from '../component/include/sidebar'
import Topbar from '../component/include/topbar'
import Dashboard from '../component/analytics'
import Footer from '../component/include/footer'
var trendsdate=[]
var trendsvalue=[]
class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            place: [],
    }
        
}
    componentDidMount() {
        axios.get('http://localhost:3030/api/trendsdataregion?key=' + this.props.match.params.id)
            .then((response) => {
                this.setState({ place: response.data.default.geoMapData })
               console.log(this.state.place)
            }).catch((err) =>{
                console.log(err)
            })
            axios.get('http://localhost:3030/api/trends?key=' + this.props.match.params.id)
            .then((response) => {
               return response.data.default.timelineData
               
            }).then(function(data) {
                for (var i = 0; i < data.length; i++) {
                    if(data[i].hasData[0]){
                   trendsdate.push(data[i].formattedTime);  
                   trendsvalue.push(data[i].value[0]);
                    }
                }  
            })
        }
    
    render() {
        return (
        <div id="page-top">
            <div id="wrapper">
                <Sidebar page="home"/>
                <div id="content-wrapper" class="d-flex flex-column">

                    <div id="content">
                        <Topbar />
                         <Dashboard user={this.props.match.params.id} place={this.state.place} trendsdate={trendsdate} trendsvalue={trendsvalue}/>
                         <Footer/>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default withRouter(Home);