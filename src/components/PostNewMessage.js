import "../styles/PostNewMessage.css";
import React from "react";

class PostNewMessage extends React.Component {
  render() {
    return (
      <div className="loginPage">
        <div className="messageBox">
          <form onSubmit={this.handleSubmit}>
            <label>
              What's happening?
              <input
                type="text"
                // value={this.state.value}
              />
              <button>{/* will need to post message to db here.  probably will include onChange or onClick */}</button>
            </label>
          </form>
        </div>
      </div>
    );
  }
}

export default PostNewMessage;
