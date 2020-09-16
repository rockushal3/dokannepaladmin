import React, { Component } from 'react';
import axios from 'axios'
import { Link, withRouter, Redirect } from 'react-router-dom'


class Sidebar extends Component {
    constructor(props) {
        super(props)
    }
  render() {
    return (
    <ul class="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

      <a class="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
        <div class="sidebar-brand-icon ">
        <i class="fas fa-dumpster"></i>
        </div>
        <div class="sidebar-brand-text mx-2">Mero Pasal</div>
      </a>

      <hr class="sidebar-divider my-0"/>

      {this.props.page == "home" ? 
      <li class="nav-item active">
      <a class="nav-link" href="/dashboard">
        <i class="fas fa-fw fa-tachometer-alt"></i>
        <span>Dashboard</span></a>
    </li>
      : <li class="nav-item">
      <a class="nav-link" href="/dashboard">
        <i class="fas fa-fw fa-tachometer-alt"></i>
        <span>Dashboard</span></a>
    </li>}
      

      <hr class="sidebar-divider"/>

      <div class="sidebar-heading">
        Product
      </div>
        
      {this.props.page == "category" ? 
      <li class="nav-item active">
    <a class="nav-link" href="/category">
        <i class="fas fa-sitemap"></i>
          <span>Category</span></a>
      </li>
      : <li class="nav-item">
      <a class="nav-link" href="/category">
        <i class="fas fa-sitemap"></i>
          <span>Category</span></a>
      </li>}
      {this.props.page == "discount" ? 
      <li class="nav-item active">
        <a class="nav-link" href="/discount">
        <i class="fas fa-tags"></i>
          <span>Discount</span></a>
      </li>
      :<li class="nav-item">
      <a class="nav-link" href="/discount">
      <i class="fas fa-tags"></i>
        <span>Discount</span></a>
    </li>
  }
  {this.props.page == "product" ? 
      <li class="nav-item active">
        <a class="nav-link" href="/product">
        <i class="fab fa-product-hunt"></i>
          <span>Product</span></a>
      </li>
      :<li class="nav-item">
      <a class="nav-link" href="/product">
      <i class="fab fa-product-hunt"></i>
        <span>Product</span></a>
    </li>}
    {this.props.page == "order" ? 
      <li class="nav-item active">
        <a class="nav-link" href="/order">
        <i class="fas fa-cart-plus"></i>
          <span>Orders</span></a>
      </li>
      : <li class="nav-item">
      <a class="nav-link" href="/order">
      <i class="fas fa-cart-plus"></i>
        <span>Orders</span></a>
    </li>
  }

      <hr class="sidebar-divider d-none d-md-block"/>
      {this.props.page == "user" ? 
      <li class="nav-item active">
        <a class="nav-link" href="/user">
          <i class="fas fa-fw fa-users"></i>
          <span>Users</span></a>
      </li>
      :<li class="nav-item">
      <a class="nav-link" href="/user">
        <i class="fas fa-fw fa-users"></i>
        <span>Users</span></a>
    </li>}

      

    </ul>
    )
}
}

export default withRouter(Sidebar);