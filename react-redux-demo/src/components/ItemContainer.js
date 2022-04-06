import React from "react"
import { connect } from "react-redux"
import buyCake from "../redux/actions/cake/cakeAction"
import buyIceCream from "../redux/actions/iceCream/iceCreamAction"

const ItemContainer = (props) => {
  return (
    <div>
      <h1>
        Number of {props.cake ? "Cake" : "IceCream"}: {props.items}
      </h1>
      <button onClick={props.buyItem}>
        Buy {props.cake ? "Cake" : "IceCream"}
      </button>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    items: ownProps.cake
      ? state.cake.numberOfCakes
      : state.iceCream.numberOfIceCreams,
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    buyItem: ownProps.cake
      ? () => dispatch(buyCake())
      : () => dispatch(buyIceCream()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)
