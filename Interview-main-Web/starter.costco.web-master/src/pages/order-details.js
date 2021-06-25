/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React, { suspense } from "react"
import PropTypes from "prop-types"
import OrderInfo from "../components/order-details/OrderInfo"
import "./order-history.css";

const OrderDetails = ({ location }) => (
  <div className="order-history-page">
    {location.state.order &&
      <Suspense fallback={"Loading"}>
        <OrderInfo order={location.state.order} />
      </Suspense>}
  </div>
)

OrderDetails.propTypes = {
  location: PropTypes.object,
}

export default OrderDetails
