import "../styles/stylePopUpBox.css";
import React from "react";

class PopUpBox extends React.Component {
  render() {
    return (
      // popupbox should be hidden until "sign up" button is clicked.
      <div className="registrationPage">
        <div className="signUpBox">
          <form onSubmit={this.handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                // value={this.state.value}
              />
            </label>
            <br />
            <label>
              Userame:
              <input
                type="text"
                // value={this.state.value}
              />
            </label>
            <br />
            <label>
              Password:
              <input
                type="password"
                // value={this.state.value}
              />
            </label>
            <br />
            <label>
              Confirm Password:
              <input
                type="password"
                // code to confirm password entry is consistent
              />
            </label>
            <br />
            <button>Submit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default PopUpBox;
