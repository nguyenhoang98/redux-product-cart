import React, { Component } from "react";
import "./Message.css";
class Message extends Component {
  render() {
    const { message } = this.props;
    return (
      <div className="products-message">
        <span className="message">{message}</span>
      </div>
    );
  }
}
export default Message;
