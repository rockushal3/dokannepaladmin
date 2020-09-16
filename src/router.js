import React, { Component } from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom'

//Components
import Home from './container/home'
import Login from './container/login'
import Category from './container/category/category'
import AddCategory from './container/category/addCategory'
import EditCategory from './container/category/editCategory'
import Product from './container/product/product'
import AddProduct from './container/product/addproduct'
import Order from './container/order'
import Discount from './container/discount/discount'
import AddDiscount from './container/discount/addDiscount'
import EditDiscount from './container/discount/editDiscount'
import User from './container/user'
import Analysis from './container/analytics'



class Router extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={Login} />
                    <Route path="/dashboard" component={Home} />
                    <Route path="/category" component={Category} />
                    <Route path="/addcategory" component={AddCategory} />
                    <Route path="/editcategory/:id" component={EditCategory} />
                    <Route path="/order" component={Order} />
                    <Route path="/product" component={Product} />
                    <Route path="/addproduct" component={AddProduct} />
                    <Route path="/discount" component={Discount} />
                    <Route path="/editdiscount/:id" component={EditDiscount} />
                    <Route path="/adddiscount" component={AddDiscount} />
                    <Route path="/user" component={User} />
                    <Route path="/analytic/:id" component={Analysis} />
                   

                </Switch>
            </BrowserRouter>
        )
    }
}

export default  Router;

