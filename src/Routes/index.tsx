import React from "react";
import { Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import Route from "./routes";
import StockPublic from "../pages/StockPublic";
import Stock from "../pages/Stock";
import Category from "../pages/Category";
import Order from "../pages/Order";

const Routes: React.FC = () => (
  <Switch>
    <Route exact path="/" component={SignIn} />
    <Route path="/signup" component={SignUp} />
    <Route path="/orders/:id" component={Order} isPrivate />
    <Route path="/dashboard" component={Dashboard} isPrivate />
    <Route path="/stock" exact component={Stock} isPrivate />
    <Route path="/stock/public" component={StockPublic} isPrivate />
    <Route path="/stock/public/:category" component={StockPublic} isPrivate />
    <Route path="/stock/categories" exact component={Category} isPrivate />
  </Switch>
);

export default Routes;
