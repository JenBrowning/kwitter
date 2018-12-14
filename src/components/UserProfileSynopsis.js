import "../styles/UserProfileSynopsis.css";
import React from "react";
import { Card, Image, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { getUserData } from "../actions/action";
import moment from "moment";
import ImageDisplayer from './ImageDisplayer';

class UserProfileSynopsis extends React.Component {
  componentDidMount() {
    this.props.getUserData();
  }

  matchIdtoUsername = userId => {
    let user = this.props.user.find(user => user.id === userId);
    if (user) return user.username;
    return "Deleted";
  };

  render() {
    return (
      <div className="container">
        <Card className="userprofile">
          {/* <Image src="https://semantic-ui.com/images/wireframe/image.png" /> */}
          <ImageDisplayer userID={this.props.user.id} />
          {/* link to image file above  this.state.user.photo? */}
          <Card.Content>
            <Card.Header>Name: {this.props.user.displayName}</Card.Header>
            <Card.Meta>
              <span className="date">
                Kweeter since {moment(this.props.user.createdAt).fromNow()}
              </span>
            </Card.Meta>

            <Card.Description>
              Hello my name is {this.props.user.username} , This is what I have
              to say about myself: "{this.props.user.about}""
            </Card.Description>
          </Card.Content>

          <Card.Content extra>
            <a>
              <Icon name="user" />
              1M Friends
            </a>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    result: state.registerResult,
    user: state.user
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUserData: () => dispatch(getUserData())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserProfileSynopsis);
