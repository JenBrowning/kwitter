import "../styles/UploadPhotoButton.css";
import React from "react";

class UploadPhotoButton extends React.Component {
  render() {
    return (
      <button className="uploadPhotoButton"
        // onClick={this.props.addsAvatarPhoto}
        // saves image to "bucket" (see Clint) and saves link to image in the db.
      >What do you want the world to think you look like?</button>
    );
  }
}

export default UploadPhotoButton;
