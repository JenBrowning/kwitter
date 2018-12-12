import React from "react";
import { connect } from "react-redux";
import { deleteUser } from "../actions/action";
import { Button } from "semantic-ui-react";

class DeleteUserButton extends React.Component {
  render() {
    return (
      <Button className="deleteUserButton" onClick={this.props.deleteUser}>
        Delete User
      </Button>
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
