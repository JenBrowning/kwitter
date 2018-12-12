import "../styles/MessageFeed.css";
import React from 'react';
import { connect } from "react-redux";
import { fetchMessages } from "../actions/action";

class MessageFeed extends React.Component {
  componentDidMount(){
    this.props.fetchMessages()
  }

   matchIdtoUsername = userId => {
    let name = this.props.users.filter(user => user.id === userId);
    if (name[0]) return name[0].username;
    return "Deleted";
  };

  render() {
    return (
      <div className="messages">
        <div className="messageFeed">
        {this.props.messages.map(message =>
          <div>
          {/* Stretch goal to add image before name */}
          {this.matchIdtoUsername(message.userId)}: <br/>
          {this.matchIdtoUsername(message.text)} <br/>
          {this.matchIdtoUsername(message.createdAt)}
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