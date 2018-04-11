import React, { Component } from 'react';
import { SearchForm } from '../common';
import List from './List';
class BusinessManage extends Component {
  render() {
    return (
      <div>
        <SearchForm />
        <List />
      </div>
    );
  }
}


export default BusinessManage;