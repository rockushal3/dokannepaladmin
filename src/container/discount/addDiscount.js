import React, { Component } from 'react';
import axios from 'axios'
import { Link, withRouter, Redirect } from 'react-router-dom'

import Sidebar from '../../component/include/sidebar'
import Topbar from '../../component/include/topbar'
import Dashboard from '../../component/discount/addDiscount'
import Footer from '../../component/include/footer'
class Category extends Component {

    render() {
        return (
        <div id="page-top">
            <div id="wrapper">
                <Sidebar page="discount"/>
                <div id="content-wrapper" class="d-flex flex-column">
                    <div id="content">
                        <Topbar />
                         <Dashboard/>
                         <Footer/>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default withRouter(Category);