import React from 'react';

const state={
    username: '',
    password: ''
}

class LoginForm extends React.Component {
  render() {
    return (
      <div className="loginForm">
        <form onSubmit={this.handleSubmit}>
          <label>
            Userame:
            <input
              type="text"
              // value={this.state.value}
              // onChange={this.handleChange}
            />
          </label>
          <label>
            Password:
            <input
              type="password"
              // value={this.state.value}
              // onChange={this.handleChange}
            />
          </label>
          <br />
          <SignUpButton />
          {/* might want to get rid of the signupbotton and do the logic here  */}
        </form>
      </div>
    );
  }
}


// (connect)mapStateToProps/mapDispatchToProps

export default LoginForm;
