const redux = require("redux")
const axios = require("axios")
const { createStore, applyMiddleware } = redux
const thunkMiddleware = require("redux-thunk").default
const logger = require("redux-logger").createLogger()

const FETCH_USERS_REQUEST = "FETCH_USERS_REQUEST"
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS"
const FETCH_USERS_FAILURE = "FETCH_USERS_FAILURE"

const initialState = {
  isLoading: false,
  users: [],
  error: "",
}

const fetchUsersRequest = () => {
  return {
    type: FETCH_USERS_REQUEST,
  }
}

const fetchUsersSuccess = (users) => {
  return {
    type: FETCH_USERS_SUCCESS,
    payload: users,
  }
}

const fetchUsersFailure = (error) => {
  return {
    type: FETCH_USERS_FAILURE,
    payload: error,
  }
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USERS_REQUEST:
      return {
        isLoading: true,
        users: [],
        error: "",
      }
    case FETCH_USERS_SUCCESS:
      return {
        isLoading: false,
        users: action.payload,
        error: "",
      }
    case FETCH_USERS_FAILURE:
      return {
        isLoading: false,
        users: [],
        error: action.payload,
      }
    default:
      return state
  }
}

const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequest())
    console.log("fetch")
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        dispatch(fetchUsersSuccess(res.data))
      })
      .catch((error) => {
        dispatch(fetchUsersFailure(error.message))
      })
  }
}

const store = createStore(reducer, applyMiddleware(thunkMiddleware, logger))
const unsub = store.subscribe(() => {})
store.dispatch(fetchUsers())
unsub()
