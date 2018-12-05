import "../styles/App.css";
import React from "react";
import LoginForm from "./LoginForm";
import Header from "./Header";
import { Route, Switch } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div className="firstView">
        <div className="startingPage">
          <Header />
          <LoginForm />

          {/* <Switch>
            <Route
              exact
              path="/"
              render={props => (
                <Header />
                <LoginForm 
                  I don't think I need anything here. The state here would include username and password./>
              // )}
            />
            <Route
              path={"/userProfile"}
              render={props => (
                <Header />
                <UserProfileSynopsis />
                <UploadPhotoButton /> (might change this depending on recommended set up with button component.)
                <ChangeUserInfo />
                <LogOutButton />
                <DeleteUserButton />
              // )}
            />
            <Route
              path={"/main"}
              render={props => (
                <Header />
                <UserProfileSynopsis>
                <PostNewMessage 
                  message={this.state.message} />
                <MessageFeed
                  messages={this.state.messages} />
                <SearchForMessages 
                  messages={this.state.messages.find(messages => ?)} 
                  handler link/>
                <DeleteMessage 
                  messages={this.state.messages.find(messages => ?)} 
                  handler link/>
                <LogOutButton />
                />
              // )}
            />
          </Switch> */}
        </div>
      </div>
    );
  }
}

export default App;
