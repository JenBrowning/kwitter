import React, { Component } from "react";
import { connect } from "react-redux";
import { register, updateUser } from "../actions/action";
import MessageFeed from "./MessageFeed";
import UserProfileSynopsis from "./UserProfileSynopsis";


//this was class changeuserprofile
class Profile extends React.Component {
  state = {
    username: "",
    password: "",
    displayName: "",
    token: ""
    // image: ?  check component library for specialized one or an html img tag (<img src="/users/idNO/picture">)
  };

  // we're not adding a change username function because the "username" for purposes of the API is the user's actual name, which the team has decided shouldn't change.  Only the display name and the password should be changed.

  handleChangeUpdatePassword = event => {
    this.setState({
      password: event.target.value
    });
  };

  // handleChaneUpdatePasswordConfirmation = event => {
  // }
  handleChangeUpdateDisplayName = event => {
    this.setState({
      displayName: event.target.value
    });
  };
  handleUpdate = event => {
    // if(the two password boxes are equal (characters and casing), then update the user)
    this.props.updateUser({
      password: this.state.password,
      displayName: this.state.displayName,
      // image: this.state.image
      // about: this.state.about  this is another bit of information about our user that we can access/display in the user profile.
    });
  };

  render() {
    return (
      <div className="updateUserInfo">
        <div className="userProfile">
          Enter New Display Here:
          <br />
          <input
            type="text"
            onChange={this.handleChangeUpdateDisplayName}
            placeholder="New Display Name"
          />
          <br />
          Enter New Password:
          <br />
          <input
            type="password"
            onChange={this.handleChangeUpdatePassword}
            placeholder="New Password"
          />
          <br />
          Confirm New Password:
          <br />
          <input type="password" />
          <br />
          <button onClick={this.handleUpdate}>Submit changes</button>
          {/* This is a dummy button; waiting for submit changes language. no authorization token should be necessary */}
          <br />
          <UserProfileSynopsis />
          <MessageFeed />
          Uploaded Photo Will be added here.
          <button>upload photo</button>
          {/* Add Clint's photo button after QA */}
          <br />
          <button>delete user</button>
          {/*   Clint is working on this feature. User delete Currently Authenticated endpoint? */}
        </div>
      </div>
    );
  }
}

// ;  don't need map state to props because we aren't displaying the current values, therefore, nothing to read/display
const mapDispatchToProps = dispatch => {
  return {
    updateUser: userData => dispatch(updateUser(userData))
    // updateUser is a prop that needs to be used SOMEWHERE in the component.
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Profile);
