import React from "react";
import { connect } from "react-redux"
import { uploadImage } from "../actions/action"

class ImageUploader extends React.Component {
   handleSubmit = event => {
       event.preventDefault()
       const formData = new FormData(event.target)
       this.props.image(formData)
   }
  render() {
      return (
      <form onSubmit={this.handleSubmit}>
          <input type="file" name="picture" id="picture"></input>
          <button type="submit" value="Submit">Submit Upload</button>
          {this.props.uploadImageResult}
      </form>)
  }
}

const mapStateToProps = state => {
   return {
     uploadImageResult: state.uploadImageResult
   };
 };

const mapDispatchToProps = dispatch => {
   return {
     image: imageData => dispatch(uploadImage(imageData))
   };
 };

export default connect(
   mapStateToProps,
   mapDispatchToProps
 )(ImageUploader);