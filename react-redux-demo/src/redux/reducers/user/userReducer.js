import * as TYPES from "../../types"
const initialState = {
  isLoading: false,
  users: [],
  error: "",
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case TYPES.FETCH_USERS_REQUESTED:
      return {
        ...state,
        isLoading: true,
        users: [],
        error: "",
      }
    case TYPES.FETCH_USERS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        users: action.payload,
        error: "",
      }
    case TYPES.FETCH_USERS_FAILURE:
      return {
        ...state,
        isLoading: false,
        users: [],
        error: action.payload,
      }
    default:
      return state
  }
}

export default userReducer
