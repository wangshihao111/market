import React, { Component } from 'react';
import './tabs.scss';
import AntdIcon from '@ant-design/icons-react';
import { HomeOutline, ShoppingCartOutline, UserOutline, CompassOutline, AppstoreOutline } from "@ant-design/icons";
import { NavLink } from "react-router-dom";

class TabsNav extends Component {
  render() {
    return (
      <div className='tabs-component'>
        <NavLink className={'tab-item'} to={'/home'}>
          <AntdIcon type={HomeOutline} className={'icon'}/>
          <p className={'nav-text'}>首页</p>
        </NavLink>
        <NavLink className={'tab-item'} to={'/category'}>
          <AntdIcon type={AppstoreOutline}  className={'icon'}/>
          <p className={'nav-text'}>分类</p>
        </NavLink>
        <NavLink className={'tab-item'} to={'/discover'}>
          <AntdIcon type={CompassOutline}  className={'icon'}/>
          <p className={'nav-text'}>发现</p>
        </NavLink>
        <NavLink className={'tab-item'} to={'/shop-cart'}>
          <AntdIcon type={ShoppingCartOutline}  className={'icon'}/>
          <p className={'nav-text'}>购物车</p>
        </NavLink>
        <NavLink className={'tab-item'} to={'/user'}>
          <AntdIcon type={UserOutline} className={'icon'}/>
          <p className={'nav-text'}>我的</p>
        </NavLink>
      </div>
    )
  }
}

export default TabsNav;