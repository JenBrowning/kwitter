import React from "react";
import "../styles/ImageDisplayer.css"
import stockIcon from "../styles/photos/stockIcon.gif"

class ImageDisplayer extends React.Component {
   state = { src: stockIcon }
   componentDidMount(
   ) {
       fetch(`https://kwitter-api.herokuapp.com/users/${this.props.userID}/picture`)
           .then(res => {
               if (res.status !== 404 && res.ok) {
                   this.setState({
                       src: `https://kwitter-api.herokuapp.com/users/${this.props.userID}/picture`
                   })
               }
           })
   }
   render() {
       return (
               <img className="image" src={this.state.src}></img>
       )
   }
}
export default ImageDisplayer;