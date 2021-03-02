import React from "react";
import "./Modal.css";



export default class Modal extends React.Component {

  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };


  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div class="modal" id="modal">
        <div class="content">{this.props.children}</div>
        <div class="actions">
          <button class="close-button" onClick={this.onClose}>
            <p className="X">X</p>
          </button>
        </div>
      </div>
    );
  }
}