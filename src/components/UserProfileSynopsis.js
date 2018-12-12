import "../styles/UserProfileSynopsis.css";
import React from "react";
import { Card, Image, Icon } from "semantic-ui-react";

const CardExampleCard = () => (
  <div className="container">
    <Card className="userprofile">
      <Image src="./download.jpg" />
      <Card.Content>
        <Card.Header>Jen</Card.Header>
        <Card.Meta>
          <span className="date">Joined in 2015</span>
        </Card.Meta>
        <Card.Description>Hello my name is Jen</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name="user" />
          22 Friends
        </a>
      </Card.Content>
    </Card>
  </div>
);

export default CardExampleCard;

// class UserProfileSynopsis extends React.Component {
//   render() {
//     return (
//       <div className="userSynopsis">
//         <div placeholder="name goes here">Fred Flintstone</div>
//         <div placeholder="username goes here">@fruityPebbles</div>
//         <div placeholder="photo goes here">Smiling Face Photo</div>
//       </div>
//     );
//   }
// }

// export default UserProfileSynopsis;
