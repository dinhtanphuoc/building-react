import React, { Component } from 'react';
import logo from '../../assets/images/logo.png';
export default class Header extends Component {

  constructor(props) {
    super(props);

    this._isOpen = this._isOpen.bind(this);
  }

  state = {
    isOpen: false
  }

  _isOpen() {
    this.setState({ isOpen: !this.state.isOpen});
  }

  render() {
    return (
      <header>
        <a href="#/" className="logo">
          <img src={logo} alt="Logo"/>
        </a>
        <div className="pull-right">
          <ul id="mini-nav" className="clearfix">
            <li className="list-box user-profile">
              <a
                href="#/"
                role="button"
                className="dropdown-toggle"
                data-toggle="dropdown"
                onClick={this._isOpen}
              >
                abc@abc.com님 안녕하세요 <i className="fa fa-chevron-down"></i>
              </a>
              <ul
                className="dropdown-menu server-activity"
                style={{display: this.state.isOpen && 'block'}}
              >
                <li>
                  <p><i className="fa fa-comment-o text-info"></i> 쪽지 <span className="badge">2</span></p>
                </li>
                <li data-toggle="modal" data-target="#myModal-editPW">
                  <p><i className="fa fa-cog text-dark"></i> 패스워드 변경</p>
                </li>
                <li data-toggle="modal" data-target="#myModal-logout">
                  <p><i className="fa fa-sign-out text-dark"></i> 로그아웃</p>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </header>
    );
  }
}