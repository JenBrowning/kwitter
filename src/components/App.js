import "../styles/App.css";
import React from "react";
import LoginForm from "./LoginForm";
import Header from "./Header";
import { Route, Switch } from "react-router-dom";
import BrowserRouter from "react-router-dom/BrowserRouter";
import main from "./Main";
import UserProfileSynopsis from "./UserProfileSynopsis";

class App extends React.Component {
  render() {
    return (
      <div className="firstView">
        <div className="startingPage">
          <div>
            <BrowserRouter>
              <div>
                <Route path="./" component={LoginForm} exact />
                <Route path="./UserProfile" component={UserProfileSynopsis} />
                <Route path="./main" component={main} exact />
              </div>
            </BrowserRouter>
            <LoginForm />
            <Header />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
