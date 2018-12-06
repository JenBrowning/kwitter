import "../styles/UserProfileSynopsis.css";
import React from "react";

class UserProfileSynopsis extends React.Component {
 render() {
   return (
     <div className="userSynopsis">
       <div placeholder="name goes here">Fred Flintstone</div>
       <div placeholder="username goes here">@fruityPebbles</div>
       <div placeholder="photo goes here">Smiling Face Photo</div>
     </div>
   );
 }
}

export default UserProfileSynopsis;
