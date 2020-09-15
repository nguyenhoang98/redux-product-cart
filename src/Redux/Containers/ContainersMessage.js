import React, { Component } from "react";
import Message from "../../Components/Message/Message";
import { connect } from "react-redux";
class ContainersMessage extends Component {
  render() {
    const { message } = this.props;
    return <Message message={message} />;
  }
}
const mapStateToProps = (state) => {
  return {
    message: state.Message,
  };
};
export default connect(mapStateToProps, null)(ContainersMessage);
