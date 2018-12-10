import "../styles/MessageFeed.css";
import React from 'react';
import { connect } from "react-redux";
import { fetchMessages } from "../actions/action";

class MessageFeed extends React.Component {
  componentDidMount(){
    this.props.fetchMessages()
  }
  render() {
    return (
      <div className="messages">
        <div className="messageFeed">
        {this.props.messages.map(message =>
          <div>
          {/* Stretch goal to add image before name */}
          {message.userId}: <br/>
          {message.text} <br/>
          {message.createdAt}
          </div>
          )}
          {/* list of all messages.  This will be a fetch/get request. Will involve polling.  And we need to make sure the most recent message is at the top, and messages are listed in descending order. See if we can adjust formatting so that the feed scrolls down automatically--may include an auto feed of the next 10 or so messages as the mouse moves.*/}
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

const mapDispatchToProps = 
  {
    //This is a shorcut for map.dispatchToProps
    fetchMessages
  };

export default connect(mapStateToProps, mapDispatchToProps)(MessageFeed);