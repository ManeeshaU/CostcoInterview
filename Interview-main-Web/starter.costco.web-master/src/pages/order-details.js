/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React from "react"
import PropTypes from "prop-types"
import OrderInfo from "../components/order-details/OrderInfo"
import "./order-history.css";

const OrderDetails = ({ location }) => (
  <div className="order-history-page">
    {location && location.state && location.state.order &&
      <OrderInfo order={location.state.order} />
    }
  </div>
)

OrderDetails.propTypes = {
  location: PropTypes.object,
}

export default OrderDetails
