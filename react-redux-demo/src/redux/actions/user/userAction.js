import axios from "axios"
import * as TYPE from "../../types"

const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUsersRequested())
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

const fetchUsersRequested = () => {
  return {
    type: TYPE.FETCH_USERS_REQUESTED,
  }
}

const fetchUsersSuccess = (users) => {
  return {
    type: TYPE.FETCH_USERS_SUCCESS,
    payload: users,
  }
}

const fetchUsersFailure = (error) => {
  return {
    type: TYPE.FETCH_USERS_FAILURE,
    payload: error,
  }
}

export default fetchUsers
