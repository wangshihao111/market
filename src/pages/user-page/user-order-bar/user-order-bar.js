import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './user-order-bar.scss';
class UserOrderBar extends Component {

  render() {
    const list = [
      {title: '待付款', tag: 0, icon: ''},
      {title: '待收货', tag: 1, icon: ''},
      {title: '待评价', tag: 2, icon: ''},
      {title: '退换/售后', tag: 3, icon: ''},
      {title: '我的订单', tag: 4, icon: ''},
    ];
    return (
      <div className={'user-order-bar'}>
        {
          list.map(v => (
            <Link key={v.tag} to={`/user/order/${v.tag}`}>
              <div className="item">
                {v.title}
              </div>
            </Link>
          ))
        }
      </div>
    )
  }
}

export default UserOrderBar