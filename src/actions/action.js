import { push } from "connected-react-router";

// consts for registration
export const REGISTER = "REGISTER";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";

// consts for login
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN = "LOGIN";
export const LOGIN_FAILURE = "LOGIN_FAILURE";

// const for update user
export const UPDATE_USER = "UPDATE_USER";
export const UPDATE_USER_SUCCESS = "UPDATE_USER_SUCCESS";
export const UPDATE_USER_FAILURE = "UPDATE_USER_FAILURE";

// const for delete user
export const DELETE_USER = "DELETE_USER";
export const DELETE_USER_SUCCESS = "DELETE_USER_SUCCESS";
export const DELETE_USER_FAILURE = "DELETE_USER_FAILURE";

//const for messages
export const GET_MESSAGES = "GET_MESSAGES";

// const for getting user info
export const GET_ALL_USERS = "GET_ALL_USERS";
export const GET_USER = "GET_USER";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";

export const GET_USER_MESSAGES = "GET_USER_MESSAGES";
export const POST_MESSAGES = "POST_MESSAGES";

export const LOGOUT_USER = "LOGOUT_USER";

export const UPLOAD_IMAGE_SUCCESS = "UPLOAD_IMAGE_SUCCESS";
export const UPLOAD_IMAGE_FAILURE = "UPLOAD_IMAGE_FAILURE";

// consts for logout
// export const LOGOUT_SUCCESS = "LOGOUT_SUCCESS";
// export const LOGOUT = "LOGOUT";
// export const LOGOUT_FAILURE = "LOGOUT_FAILURE";

export const postMessage = text => (dispatch, getState) => {
  const token = getState().loginData.token;

  fetch("https://kwitter-api.herokuapp.com/messages/", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ text: text })
  })
    .then(response => response.json())
    .then(data => {
      dispatch(fetchMessages());
      // dispatch({type: _____})
    });
};

//consts for profile.  push onto the history stack (to hit back a page)

// const mapDispatchToProps = dispatch => {
//   return {
//     register: registerData => dispatch(register(registerData))
//   };
// };

export const register = registerData => dispatch => {
  // dispatch here before fetch
  dispatch({
    type: REGISTER
  });

  fetch("https://kwitter-api.herokuapp.com/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(registerData)
  })
    .then(res => {
      if (!res.ok) {
        res.json().then(err => {
          throw err;
        });
      }

      return res.json();
    })
    .then(data => {
      // dispatch here on success --
      dispatch({
        type: REGISTER_SUCCESS,
        register: data,
        result: "Successfully Registered!"
      });

      async function fixTheRoute() {
        await dispatch(
          login({
            username: registerData.username,
            password: registerData.password
          })
          )
          .then(() => dispatch(push("/userProfile")))
      }
      fixTheRoute();

    })
    .catch(err => {
      // dispatch here on fail --
      dispatch({
        type: REGISTER_FAIL,
        result: "Failed to Register!"
      });
    });
};

export const loginThenMainFeed = loginData => dispatch => {
  dispatch(login(loginData))
  .then(() => dispatch(push('/mainFeed')))
  .catch(() => window.alert("GET OUT RIGHT NOW!!!!  Bad password or username."))
}

export const login = loginData => dispatch => {
  // dispatch here before fetch
  dispatch({
    type: LOGIN
  });

  return fetch("https://kwitter-api.herokuapp.com/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(loginData)
  })
    .then(res => {
      if (!res.ok) {
        res.json().then(err => {
          throw err;
        });
      }

      return res.json();
    })
    .then(data => {
      // dispatch here on success --
      if (data.success === true) {
        dispatch({
          type: LOGIN_SUCCESS,
          loginData: data
        });
        // logic for routing
        dispatch(getAllUsersInfo());

      } else {
        throw "nope.";
      }
    })
    .catch(err => {
      // dispatch here on fail --
      
      throw dispatch({
        type: LOGIN_FAILURE,
        loginResult: "You shall not pass!"
      });
    });
};

// the newUserData is only for the text boxes.  the image will be in a separate endpoint.

// newUserData is a reference to the body or value being passed in (component information which is responsible for grabbing data out of input boxes and sending it to the action creator.)
export const updateUser = newUserData => (dispatch, getState) => {
  const token = getState().loginData.token;
  dispatch({
    type: UPDATE_USER
  });

  fetch("https://kwitter-api.herokuapp.com/users", {
    method: "PATCH",
    headers: {
      Authorization: "Bearer " + token,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(newUserData)
  })
    .then(res => {
      if (!res.ok) {
        res.json().then(err => {
          throw err;
        });
      }

      return res.json();
    })
    .then(data => {
      // dispatch here on success --
      dispatch({
        type: UPDATE_USER_SUCCESS,
        displayName: data.user.displayName
      });
      // logic for routing when dealing with asych functions.
      dispatch(push("/mainFeed"));
    })
    .catch(err => {
      // dispatch here on fail --
      dispatch({
        type: UPDATE_USER_FAILURE,
        updateResult: "no one likes you"
      });
    });
};

export const deleteUser = () => (dispatch, getState) => {
  const token = getState().loginData.token;
  dispatch({
    type: DELETE_USER
  });

  fetch("https://kwitter-api.herokuapp.com/users", {
    method: "DELETE",
    headers: {
      Authorization: "Bearer " + token
    }
  })
    .then(res => {
      if (!res.ok) {
        res.json().then(err => {
          throw err;
        });
      }
      return res.json();
    })
    .then(data => {
      dispatch({
        type: DELETE_USER_SUCCESS
      });
      dispatch(push("/"));
    })
    .catch(err => {
      dispatch({
        type: DELETE_USER_FAILURE,
        deleteUserResult: "Permission denied"
      });
    });
};

export const fetchMessages = () => dispatch => {
  fetch("https://kwitter-api.herokuapp.com/messages?limit=10")
    .then(response => response.json())
    .then(data => {
      dispatch(getMessages(data.messages));
    });
};

export const getMessages = messages => {
  return {
    type: GET_MESSAGES,
    messages
  };
};

export const fetchAHMessages = () => (dispatch, getState) => {
  const AHID = getState().loginData.id;
  fetch(`https://kwitter-api.herokuapp.com/users/${AHID}`)
    //AHID is a javascript variable that pulls the information from the redux state which houses the information of our user ID and allows us to put it into the fetch request.
    .then(response => response.json())
    .then(data => {
      dispatch(getAHMessages(data.user.messages));
    });
};

export const getAHMessages = messages => {
  return {
    type: GET_USER_MESSAGES,
    messages
  };
};

export const getUserData = () => (dispatch, getState) => {
  const userId = getState().loginData.id;
  dispatch({
    type: GET_USER
  });
  fetch(`https://kwitter-api.herokuapp.com/users/${userId}`)
    .then(response => response.json())
    .then(data => {
      dispatch(getUserSuccess(data.user));
    });
};

export const getUserSuccess = user => {
  return {
    type: GET_USER_SUCCESS,
    user
  };
};

export const getAllUsersInfo = () => dispatch => {
  fetch("https://kwitter-api.herokuapp.com/users?limit=10000&offset=0")
    .then(response => response.json())
    .then(data => {
      dispatch(getAllInfo(data.users));
    });
};

export const getAllInfo = users => {
  return {
    type: GET_ALL_USERS,
    users
  };
};


export const logoutUser = () => dispatch => {
  dispatch(logoutCurrentUser())
  dispatch(push("/"))
}

export const logoutCurrentUser= () => {
  return {
    type: LOGOUT_USER
  }
}
export const uploadImage = imageData => (dispatch, getState) => {
  const token = getState().loginData.token;
  fetch("https://kwitter-api.herokuapp.com/users/picture", {
    method: "PUT",
    headers: {
      Authorization: "Bearer " + token,
      // "Content-Type": "multipart/form-data"
    },
    body:  imageData
  })
  .then(res => {
    if (!res.ok) {
        throw res.status;
    } else {
      dispatch({
        type: UPLOAD_IMAGE_SUCCESS,
        uploadImageResult: "Upload Successful!"}
      )
    }
  })
  .catch(err => {
    dispatch({
      type: UPLOAD_IMAGE_FAILURE,
      uploadImageResult: "Upload image failed.  Please try again later!"
    });
  });
 }