import React, { Component } from 'react';
import { autobind } from "core-decorators";
import Icon from "@ant-design/icons-react/es";
import { ArrowLeftOutline } from "@ant-design/icons";
import UserService from "../../user-service";

class Register extends Component {
  state = {
    code: '',
    tel: '',
    psw: '',
    codeDisable: false, // 获取验证码禁用
    codeStatusText: '获取验证码',
    coldTime: 60 // 获取验证码的冷却时间
  };

  @autobind
  onValueChange(e) {
    e.persist();
    this.setState({
      [e.target.name]: e.target.value
    }, () => console.log(this.state));
  }

  async getValidationCode() {
    this.setState({
      codeDisable: true,
      codeStatusText: '获取中...'
    });
    let timer;
    try {
      const res = await UserService.getVerificationCode({ tel: this.state.tel });
      if (res.code === 0) {
        this.setState({
          codeDisable: true,
          codeStatusText: '获取成功'
        });
        timer = setInterval(() => {
          if (this.state.coldTime === 0) {
            clearInterval(timer);
            this.setState({
              coldTime: 60,
              codeDisable: false,
              codeStatusText: '获取验证码'
            });
          } else {
            this.setState({ coldTime: this.state.coldTime - 1 })
          }
        }, 1000)
      } else {
        alert('获取失败！ ' + res.msg);
      }
    } catch (e) {
      alert('出错了...' + e);
      this.setState({
        coldTime: 60,
        codeDisable: false,
        codeStatusText: '获取验证码'
      });
    }
  }

  render() {
    return (
      <div className={'login-and-register-login'}>
        <header className={'header'}>
          <Icon type={ArrowLeftOutline} className={'icon'} onClick={() => this.props.history.goBack()}/>
          用户注册
        </header>
        <form className="form">
          <div className="form-item">
            <input type="text"
                   placeholder={'请输入手机号'}
                   name={'tel'}
                   onChange={this.onValueChange}
            />

          </div>
          <div className="form-item">
            <input type="password"
                   placeholder={'密码'}
                   name={'psw'}
                   onChange={this.onValueChange}
            />
          </div>
          <div className="form-item code-type">
            <input type="text"
                   placeholder={'验证码'}
                   maxLength={6}
                   minLength={6}
                   name={'code'}
                   value={this.state.code}
                   onChange={this.onValueChange}
            />
            <button className="get-code"
                    type={'button'}
                    disabled={this.state.codeDisable}
                    onClick={() => this.getValidationCode()}
            >
              {this.state.codeDisable ? this.state.codeStatusText + ' ' + this.state.coldTime : this.state.codeStatusText}
            </button>
          </div>
          <button className="login-btn" type={'button'} disabled={!this.state.valid}
                  onClick={() => this.onSubmit()}>注册
          </button>
        </form>
      </div>
    )
  }
}

export default Register