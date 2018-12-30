import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import './user-top-nav.scss';
import MsgBtn from "../../../components/msg-btn/msg-btn";
import { autobind } from "core-decorators";

@withRouter
class UserTopNav extends Component {
  @autobind
  openMsgPage() {
    this.props.history.push('/message');
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    if (nextProps.y > 60) {
      return false;
    }
    return true;
  }

  render() {
    const alpha = this.props.y || 0;
    const avatar = this.props.avatar || require('../img/default_avatar.jpg');
    return (
      <div className={'user-top-nav'} style={{ 'background': `rgba(255,255,255,${alpha})` }}>
        <div className="avatar-wrapper">
          {this.props.y > 40 && <img src={avatar} alt="头像" className="avatar"/>}
        </div>
        {this.props.y > 40 && <span>我的</span>}
        <div className="right">
          <MsgBtn onClick={this.openMsgPage}/>
        </div>
      </div>
    )
  }
}

export default UserTopNav