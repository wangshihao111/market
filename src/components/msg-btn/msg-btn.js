import React, { Component } from 'react';
import Icon from '@ant-design/icons-react';
import { MessageOutline } from "@ant-design/icons";
import './msg-button.scss';

class MsgBtn extends Component {

  render() {
    return (
      <div className={'universal-message-button'} onClick={(e) => this.props.onClick(e)}>
        <Icon type={MessageOutline} className={'icon'}/>
        {
          this.props.badge && <div className="badge">{this.props.badge}</div>
        }
      </div>
    )
  }
}

export default MsgBtn;