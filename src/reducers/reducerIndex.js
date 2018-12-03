// import { Reducers } from 'redux';

const initialState = {
    token:"",
    username:"",
    name:"",
    messages:[]
  }

//   reducer will be called in mapDispatchToState
  export default function Reducer(state = initialState, action) {
    switch (action.type) {
      case 'LOGIN_PAGE': {
  //       return {...state,
  //         visibilityFilter: action.filter}
  //       })
  //     }
  //     case 'PROFILE_PAGE': {
  //       return Object.assign({}, state, {
  //         todos: state.todos.concat({
  //           id: action.id,
  //           text: action.text,
  //           completed: false
  //         })
  //       })
  //     }
  //     case 'MAIN_PAGE': {
  //       return Object.assign({}, state, {
  //         todos: state.todos.map(todo => {
  //           if (todo.id !== action.id) {
  //             return todo
  //           }
  // ​
  //           return Object.assign({}, todo, {
  //             completed: !todo.completed
  //           })
  //         })
  //       })
      }
      default:
        return state
    }
  }

