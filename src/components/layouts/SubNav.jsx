import React, { Component } from 'react';
export default class SubNav extends Component {
  render() {
    return (
      <div className="sub-nav hidden-sm hidden-xs">
        <ul>
          <li><a href="#/" className="heading">사업관리</a></li>
          <li className="hidden-sm hidden-xs">
            <a href="#/" className="selected">사업관리</a>
          </li>
          <li className="hidden-sm hidden-xs">
            <a href="#/">업체관리</a>
          </li>
          <li className="hidden-sm hidden-xs">
            <a href="#/">직원관리</a>
          </li>
          <li className="hidden-sm hidden-xs">
            <a href="#/">물품관리</a>
          </li>
        </ul>
        <div className="custom-search hidden-sm hidden-xs">
          <input type="text" className="search-query" placeholder="도움말 검색" />
          <i className="fa fa-search"></i>
        </div>
      </div>
    );
  }
}