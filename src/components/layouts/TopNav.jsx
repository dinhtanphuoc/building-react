import React, { Component } from 'react';
export default class TopNav extends Component {
  render() {
    return (
      <div id='cssmenu'>
        <ul>
          <li className='active'>
            <a href='#/'>사업관리</a>
            <ul>
                <li><a href="#/">사업관리</a></li>
                <li><a href="#/">업체관리</a></li>
                <li><a href="#/">직원관리</a></li>
        <li><a href="#/">물품관리</a></li>
            </ul>
          </li>
          <li className=''>
            <a href='#/'>보안관리</a>
            <ul>
                <li><a href="#/">MENU B-1</a></li>
                <li><a href="#/">MENU B-2</a></li>
                <li><a href="#/">MENU B-3</a></li>
            </ul>
          </li>
          <li className=''>
            <a href='#/'>산출물 관리</a>
            <ul>
                <li><a href="#/">MENU C-1</a></li>
                <li><a href="#/">MENU C-2</a></li>
                <li><a href="#/">MENU C-3</a></li>
            </ul>
          </li>
          <li className=''>
            <a href='#/'>시스템관리</a>
            <ul>
                <li><a href="#/">공단직원관리</a></li>
                <li><a href="#/">도움말관리</a></li>
            </ul>
          </li>
        </ul>
      </div>
    );
  }
}