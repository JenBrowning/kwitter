import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../actions/action";
import { Link } from "react-router-dom";

//this was class changeuserprofile
//added a userProfile classname for app.css
class Profile extends React.Component {
  render() {
    return (
      <div className="updateUserInfoToDatabase">
        <div className="userProfile">
          <form onSubmit={this.handleSubmit}>
            <label>
              Enter New Userame Here:
              <input
                type="text"
              />
              
              <input
                type="text"
              />
              <button>submit user changes</button>
              <button>delete user</button>
              <button>upload photo</button>
            </label>
            <br />

            {/* <UploadPhoto /> */}
            {/* may be able to use the component above to update account with a new avatar photo.  Might need to make adjustment to UploadPhoto to accommodate this. */}
            <br />
            {/* <SubmitUserChanges /> */}
          </form>
        </div>
      </div>
    );
  }
}

export default Profile;

//need submit userchanges button, deleteuser button, uploadphoto button, and header
