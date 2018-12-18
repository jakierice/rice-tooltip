import React, { Component, Fragment } from 'react';

export default class Tooltip extends Component {
  render() {
    return (
      <Fragment>
        <h1>TOOLTIP ANCHOR</h1>
        {this.props.children}
      </Fragment>
    );
  }
}
