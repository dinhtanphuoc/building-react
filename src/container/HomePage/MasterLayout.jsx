import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class MasterLayout extends Component {

  static propTypes = {
    tracks: PropTypes.array
  }

  static defaultProps = {
    tracks: []
  }

  render() {
    return (
      <div>
        bbbbbccccccccc
        { this.props.tracks.map((item, k) => (
            <div key={k}>Track: {item.title} aaaaaaaaaaâ</div>
          ))
        }
      </div>
    );
  }
}