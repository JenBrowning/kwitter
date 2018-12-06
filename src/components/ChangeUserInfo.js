import "../styles/ChangeUserInfo.css";
import React from 'react';
import SubmitUserChanges from './SubmitUserChanges';

class ChangeUserInfo extends React.Component {
  render() {
    return (
      <div className="updateUserInfoToDatabase">
          <form onSubmit={this.handleSubmit}>
            <label>
              Enter New Userame Here:
              <input
                type="text"
                // value={this.state.value}
              />
            </label>
            <br />

            {/* <UploadPhoto /> */}
            {/* may be able to use the component above to update account with a new avatar photo.  Might need to make adjustment to UploadPhoto to accommodate this. */}
            <br />
            <SubmitUserChanges />
            </form>
      </div>
    );
  }
}

export default ChangeUserInfo;
