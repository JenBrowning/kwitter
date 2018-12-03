import "../styles/MessageFeed.css";
import React from 'react';

class MessageFeed extends React.Component {
  render() {
    return (
      <div className="messages">
        <div className="messageFeed">
          {/* list of all messages.  This will be a fetch/get request. Will involve polling.  And we need to make sure the most recent message is at the top, and messages are listed in descending order. See if we can adjust formatting so that the feed scrolls down automatically--may include an auto feed of the next 10 or so messages as the mouse moves.*/}
        </div>
      </div>
    );
  }
}

export default App;
