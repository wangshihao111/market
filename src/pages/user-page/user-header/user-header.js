import React, { Component } from 'react';
import { Route, withRouter } from "react-router-dom";
import './user-header.scss';
import { autobind } from "core-decorators";
import LoginAndRegister from "../login-and-register/login-and-register";

@withRouter
class UserHeader extends Component {
  state = {};

  @autobind
  openAuthPage() {
    this.props.history.push('/user/auth');
  }

  render() {
    const avatarUrl = this.props.avatar || require('../img/default_avatar.jpg');
    return (
      <div className={'user-page-header'}>
        <div className="avatar-wrapper" onClick={this.openAuthPage}>
          <img src={avatarUrl} alt="用户头像" className="avatar"/>
        </div>
        <div className="user-info">
          {!this.props.name &&
            (<div className="user" onClick={this.openAuthPage}>未登录</div>)
          }
          {this.props.name && (
            <div className="user">{this.props.name}</div>
          )}
        </div>
        <Route path={'/user/auth'} render={LoginAndRegister}/>
      </div>
    )
  }
}

export default UserHeader