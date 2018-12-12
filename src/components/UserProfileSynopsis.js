import "../styles/UserProfileSynopsis.css";
import React from "react";
import { Card, Image, Icon } from "semantic-ui-react";
import { connect } from "react-redux";
import { getUserData } from "../actions/action";
import moment from 'moment';

class UserProfileSynopsis extends React.Component {
  componentDidMount() {
    this.props.getUserData();
  }

  render() {
    return (
      <div className="container">
        <Card className="userprofile">
          <Image src="./jen.jpeg" />
          {/* link to image file above  this.state.user.photo? */}
          <Card.Content>
            {/* <Card.Header>Name: {moment(this.props.user.id).fromNow()}</Card.Header> */}
            <Card.Meta>
                {/* <span className="date"> */}
                {/* Kweeter since {this.props.user.createdAt} */}
                {/* </span> */}
            </Card.Meta>

            <Card.Description>
              {/* Hello my name is {this.props.user.id} , I {this.props.user.about} */}
            </Card.Description>
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
