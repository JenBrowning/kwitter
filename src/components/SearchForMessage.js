import "../styles/SearchForMessage.css";
import React from 'react';
import MessageFeed from './MessageFeed';

class SearchForMessage extends React.Component {
  render() {
    return (
      <div className="findMessages">
        <MessageFeed />
        {/* This will need to search the messsage feed to find messages by ID. */}
      </div>
    );
  }
}

export default SearchForMessage;
