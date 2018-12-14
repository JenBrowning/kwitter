import "../styles/MainPage.css";
import React from "react";
import { Grid, Form, Segment } from "semantic-ui-react";

import MessageFeed from "./MessageFeed";
import LogOutButton from "./LogOutButton";
import UserProfileSynopsis from "./UserProfileSynopsis";
import MessageInputBox from "./MessageInputBox.js";
import ProfilePageNavButton from "./ProfilePageNavButton.js";

//changed file name and component name from messagefeed to mainfeed
class MainPage extends React.Component {
  render() {
    return (
      <Grid className="grid" centered>
        <Form className="form">
          <Form.Field className="gridcolumn1" width={4}>
            <Grid.Column>
              <UserProfileSynopsis />
            </Grid.Column>
          </Form.Field>

          <Form.Field className="gridcolumn2" width={6}>
            <Grid.Column>
              <MessageInputBox />
              <MessageFeed />
            </Grid.Column>
          </Form.Field>

          <Form.Field className="gridcolumn3" width={4}>
            <Grid.Column>
              <ProfilePageNavButton />
              <LogOutButton />
            </Grid.Column>
          </Form.Field>
        </Form>
      </Grid>
    );
  }
}

export default MainPage;
