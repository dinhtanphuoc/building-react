import React, { Component } from 'react';
export default class Paging extends Component {

  constructor(props) {
    super(props);

    this._isOpen = this._isOpen.bind(this);
  }

  state = {
    isOpen: false
  }

  _isOpen() {
    this.setState({isOpen: !this.state.isOpen});
  }

  render() {
    return (
      <div className="row top-padding-20">
        <div className="col-lg-2 col-md-2">
          <div className="btn-group">
            <button
              type="button"
              className="btn btn-default btn-sm dropdown-toggle"
              data-toggle="dropdown"
              onClick={this._isOpen}
            >
              목록개수
              <span className="caret"></span>
            </button>
            <ul
              className="dropdown-menu"
              role="menu"
              style={{display: this.state.isOpen && 'block'}}
            >
              <li><a href="#/">10개씩</a></li>
              <li><a href="#/">20개씩</a></li>
              <li><a href="#/">50개씩</a></li>
            </ul>
          </div>
        </div>
        <div className="col-lg-8 col-md-8 center-align-text">
          <ul className="pagination no-margin">
            <li className="disabled"><a href="#/">«</a></li>
            <li className="active"><a href="#/">1 <span className="sr-only">(current)</span></a></li>
            <li><a href="#/">2</a></li>
            <li><a href="#/">3</a></li>
            <li><a href="#/">4</a></li>
            <li><a href="#/">5</a></li>
            <li><a href="#/">»</a></li>
            </ul>
        </div>
        <div className="col-lg-2 col-md-2 right-align-text">
            <button type="button" className="btn btn-default btn-sm"><i className="fa fa-print"></i> 인쇄</button>
        </div>
      </div>
    );
  }
}