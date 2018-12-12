import React from "react";
import { connect } from "react-redux";
import { deleteUser } from "../actions/action";

class DeleteUserButton extends React.Component {
  render() {
    return (
      <button className="deleteUserButton" onClick={this.props.deleteUser}>
        Delete User
      </button>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteUser: () => dispatch(deleteUser())
  };
};

export default connect(
  null,
  mapDispatchToProps
)(DeleteUserButton);

//this will need to be linked with the button in the Profile.js
