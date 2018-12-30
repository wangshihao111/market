import React, { Component } from 'react';
import { Route, Switch, withRouter } from "react-router-dom";
import Login from "./login/login";
import Register from "./register/register";
import './login-register.scss';
import Modal from "../../../components/modal/modal";

@withRouter
class LoginAndRegister extends Component {
  componentDidMount() {
    if (this.props.location.pathname !== '/user/auth/login') {
      this.props.history.replace('/user/auth/login')
    }
  }

  render() {
    return (
      <Modal>
        <div className={'login-and-register'}>
          <Switch>
            <Route path={'/user/auth/login'} component={Login}/>
            <Route path={'/user/auth/register'} component={Register}/>
          </Switch>
        </div>
      </Modal>
    )
  }
}

export default LoginAndRegister