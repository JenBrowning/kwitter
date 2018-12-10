import React from "react";
import { Link } from 'react-router-dom';

class DeleteUserButton extends React.Component {
  render() {
    return (
      <Link to='/userProfile'><button className="profilePageNavButton"
        onClick={this.setRedirect}
      >Profile Page</button></Link>
    );
  }
}

export default DeleteUserButton;