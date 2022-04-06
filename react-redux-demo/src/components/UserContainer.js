import React, { useEffect } from "react"
import { connect } from "react-redux"
import fetchUsers from "../redux/actions/user/userAction"

const UserContainer = (props) => {
  useEffect(() => {
    props.fetchUser()
  }, [])

  return props.isLoading ? (
    <div>Loading</div>
  ) : props.error ? (
    <div>{props.error}</div>
  ) : (
    <div>
      {props.users?.map((user) => (
        <p>{user.name}</p>
      ))}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.user.isLoading,
    users: state.user.users,
    error: state.user.error,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUser: () => dispatch(fetchUsers()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserContainer)
