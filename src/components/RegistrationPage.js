import React, { Component } from "react";
import { register } from "../actions/action";
import { connect } from "react-redux";
import "../styles/RegistrationPage.css";
import { Form, Segment, Grid, Button } from "semantic-ui-react";

// let Center = require("react-center");

class RegistrationPage extends Component {
  state = {
    username: "",
    password: "",
    displayName: ""
  };
  handleChangeUsername = event => {
    this.setState({
      username: event.target.value
    });
  };
  handleChangePassword = event => {
    this.setState({
      password: event.target.value
    });
  };
  handleChangeDisplayName = event => {
    this.setState({
      displayName: event.target.value
    });
  };
  handleRegister = event => {
    this.props.register({
      username: this.state.username,
      password: this.state.password,
      displayName: this.state.displayName
    });
  };

  render() {
    return (
      <div className="entireform">
        <Grid className="grid">
          <Form>
            <Segment stacked>
              <Form.Field>
                <input
                  type="text"
                  onChange={this.handleChangeUsername}
                  required
                  placeholder="Username"
                />
              </Form.Field>
              <br />
              <Form.Field>
                <input
                  type="password"
                  onChange={this.handleChangePassword}
                  required
                  placeholder="Password"
                />
              </Form.Field>
              <br />
              <Form.Field>
                <input
                  type="text"
                  onChange={this.handleChangeDisplayName}
                  required
                  placeholder="Display Name"
                />
              </Form.Field>
              <Button
                onClick={this.handleRegister}
                name="register"
                placeholder="Register"
              >
                Register
              </Button>
            </Segment>
          </Form>
        </Grid>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    result: state.registerResult
  };
};
const mapDispatchToProps = dispatch => {
  return {
    register: registerData => dispatch(register(registerData))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegistrationPage);
