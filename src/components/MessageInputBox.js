import "../styles/MessageFeed.css";
import React from "react";

import { connect } from "react-redux";
import { fetchMessages, postMessage } from "../actions/action";

class PostMessage extends React.Component {
  state = {
    body: ""
  };
}

class MessageInputBox extends React.Component {
  state = {
    message: ""
  };
  handleMessages = event => {
    this.setState({ message: event.target.value });
  };
  handlepostMessage = event => {
    this.props.postMessage(this.state.message);
    this.setState({ message: "" });
  };
  render() {
    return (
      <div className="messages">
        <div className="messageFeed">
          <div>
            <input
              value={this.state.message}
              placeholder="Kweet here!"
              type="text"
              onChange={this.handleMessages}
            />
            <br />
            <button onClick={this.handlepostMessage}>Post Kweet!</button>
            <br />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    messages: state.messages
  };
};

const mapDispatchToProps = dispatch => ({
  postMessage: message => dispatch(postMessage(message))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MessageInputBox);
