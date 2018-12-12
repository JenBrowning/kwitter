import "../styles/App.css";
import React, { Fragment } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./Header";
import LoginForm from "./LoginForm";
import RegistrationPage from "./RegistrationPage";
import Profile from "./Profile";
import UserProfileSynopsis from "./UserProfileSynopsis";
import LogOutButton from "./LogOutButton";
import PostNewMessage from "./PostNewMessage";
import MessageFeed from "./MessageFeed";
import SearchForMessages from "./SearchForMessage";
import DeleteMessage from "./DeleteMessage";
import { UPDATE_USER, updateUser } from "../actions/action";
import MessageInputBox from "./MessageInputBox";
import MainFeedNavButton from "./MainFeedNavButton";
import MainPage from "./MainPage";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth
    };
  }
  render() {
    return (
      <div className="firstView">
        <Header />
        <div className="startingPage">
          {/* <Header />
          <LoginForm /> */}

          {
            <Switch>
              <Route
                exact
                path="/"
                render={props => (
                  <React.Fragment>
                    <LoginForm />
                  </React.Fragment>
                )}
              />

              <Route
                // exact
                path="/registration"
                render={props => (
                  <React.Fragment>
                    {/* <Header /> */}
                    <RegistrationPage />
                  </React.Fragment>
                )}
              />

              <Route
                path={"/userProfile"}
                render={props => (
                  <React.Fragment>
                    <Profile />
                    <LogOutButton />
                  </React.Fragment>
                )}
              />
              <Route
                path={"/mainFeed"}
                render={props => (
                  <React.Fragment>
                    {/* <UserProfileSynopsis /> */}
                    {/* <MessageFeed /> */}
                    <MainPage />
                    {/* <MessageInputBox /> */}
                    {/* <LogOutButton /> */}
                  </React.Fragment>
                )}
              />
            </Switch>
          }
        </div>
      </div>
    );
  }
}

export default App;
