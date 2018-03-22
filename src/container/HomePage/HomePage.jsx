import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as Actions from '../../actions';

class HomePage extends Component {

  static propTypes = {
    items: PropTypes.array
  }

  static defaultProps = {
    items: []
  }

  render() {
    return (
      <div>
        { this.props.tracks.items.map((item, k) => (
            <div key={k}>Track: {item.title} </div>
          ))
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tracks: {
    ...state.tracks,
    items: state.tracks
  }
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)