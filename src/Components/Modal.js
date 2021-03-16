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
      <div className="modal" id="modal">
        <div className="content">{this.props.children}</div>
        <div className="actions">
          <button className="close-button" onClick={this.onClose}>
            <p className="X">X</p>
          </button>
        </div>
      </div>
    );
  }
}