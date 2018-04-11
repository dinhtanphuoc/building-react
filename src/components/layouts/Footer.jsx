import React, { Component } from 'react';

export default class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="row">
          <div className="col-lg-8 col-md-8">
            <ul className="list-normal">
              <li><a href="#/">약관 A</a></li>
              <li><a href="#/">약관 B</a></li>
              <li><a href="#/">약관 C</a></li>
              <li><a href="#/">약관 D</a></li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-4 right-align-text">
            <div className="btn-group">
              <button type="button" className="btn btn-primary btn-sm">관련사이트</button>
              <button type="button" className="btn btn-primary btn-sm dropdown-toggle" data-toggle="dropdown">
                <span className="caret"></span>
                <span className="sr-only">Toggle Dropdown</span>
              </button>
              <ul className="dropdown-menu" role="menu">
                <li><a href="#/">.</a></li>
              </ul>
            </div>
          </div>
        </div>
        <p>
          [44428] 울산광역시 중구 종가로 340 근로복지공단 | 대표전화 : 1588-0075 | Email : master@kcomwel.or.kr<br />
          Copyright © 근로복지공단. All rights Reserved.
        </p>
      </footer>
    );
  }
}