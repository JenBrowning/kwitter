import "../styles/DeleteMessage.css";
import React from 'react';
import MessageFeed from './MessageFeed';

class DeleteMessage extends React.Component {
  render() {
    return (
      <div className="deleteMessageByID">
        <MessageFeed />
        {/* This will require manipulating the message feed to identify messages by account holder (by name)  and then delete messages by that person.*/}
      </div>
    );
  }
}

export default DeleteMessage;
