import { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import './Dialog.css';

export default class Dialog extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired
  };

  dialogElement = document.createElement('div');

  componentDidMount() {
    this.dialogElement.setAttribute('data-rice-tooltip-portal', true);
    document.body.appendChild(this.dialogElement);
  }

  render() {
    return ReactDOM.createPortal(this.props.children, this.dialogElement);
  }
}
