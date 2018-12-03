import "../styles/DeleteUserButton.css";
import React from "react";

class DeleteUserButton extends React.Component {
  render() {
    return (
      // button below will remove account holder from the db
      <button className="deleteUserButton"
        // onClick={this.props.removeFromDB}
      >Delete User.  !GET OUT!</button>
    );

    // DO AN ALERT ASKING THE USER IF HE/SHE IS CERTAIN THEY WANT TO DELETE THEIR ACCOUNT.  Add password confirmation/authentication before account is deleted.
  }
}

export default DeleteUserButton;