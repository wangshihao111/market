import React, { Component } from 'react';
import UserHeader from "./user-header/user-header";
import './user-page.scss';
import UserTopNav from "./user-top-nav/user-top-nav";
import UserOrderBar from "./user-order-bar/user-order-bar";
import FavAndHistory from "./fav-and-hidtory/fav-and-hidtory";

class UserPage extends Component {
  state = {
    y: 0
  };
  render() {
    return (
      <div className={'user-page'}>
        <UserTopNav y={this.state.y}/>
        <div className="content-wrapper">
          <UserHeader/>
          <UserOrderBar/>
          <FavAndHistory/>
        </div>
      </div>
    )
  }
}

export default UserPage;