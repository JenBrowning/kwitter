import React from "react";

class SubmitUserChangesButton extends React.Component {
  render() {
    return (
      // button below does a post request to update the database with changes to (new and existing) user information.
      <button className="submitUserChangesButton"
        // onClick={this.props.sendInfoToDatabase}
      >Submit Changes</button>
    );
  }
}

export default SubmitUserChangesButton;

