import React, { Component } from 'react';
export default class Row extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-lg-12 col-md-12">
            <ol className="breadcrumb" style={{marginBottom: 15}}>
              <li><a href="#/">Home</a></li>
              <li><a href="#/">사업관리</a></li>
              <li className="active">사업관리</li>
            </ol>
        </div>
      </div>
    );
  }
}