import "../styles/UserProfileSynopsis.css";
import React from "react";

class UserProfileSynopsis extends React.Component {
  render() {
    return (
      <div className="userSynopsis">
        <div placeholder="name goes here" />
        <div placeholder="username goes here" />
        <div placeholder="photo goes here" />
        <button>Update</button>
      </div>
    );
  }
}

export default UserProfileSynopsis;
