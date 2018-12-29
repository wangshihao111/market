import React, { Component } from 'react';
import { Switch, Route, Redirect } from "react-router-dom";
import './App.scss';
import HomePage from "./pages/home-page/home-page";
import ShopCartPage from "./pages/shopcart-page/shopcart-page";
import DiscoverPage from "./pages/discover-page/discover-page";
import UserPage from "./pages/user-page/user-page";
import SearchPage from "./pages/search-page/search-page";
import NotFound from "./components/not-found/not-found";
import TabsNav from "./components/tabs-nav/tabs-nav";
import CategoryPage from "./pages/category-page/category-page";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className={'router-wrapper'}>
          <Switch>
            <Route path={'/home'} component={HomePage}/>
            <Route path={'/category'} component={CategoryPage}/>
            <Route path={'/search'} component={SearchPage}/>
            <Route path={'/user'} component={UserPage}/>
            <Route path={'/discover'} component={DiscoverPage}/>
            <Route path={'/shop-cart'} component={ShopCartPage}/>
            <Redirect from={'/'} to={'/home'}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
        <div className="nav-wrapper">
          <TabsNav/>
        </div>
      </div>
    );
  }
}

export default App;
