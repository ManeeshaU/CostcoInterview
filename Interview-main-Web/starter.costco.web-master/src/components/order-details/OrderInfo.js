/* eslint-disable react/forbid-prop-types */
/* eslint-disable react/require-default-props */
import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "./OrderInfo.css"

const OrderInfo = React.lazy(({ order }) => {
  return (
    <div className="order-info">
      <h3>ORDER NO: {order.orderId}</h3>
      <h4>CREATED ON: {order.createdOn}</h4>
      <h1 className="order-name">{order.orderName}</h1>
      <p className="order-description">{order.orderDescription}</p>
      <div className="text-center">
        <Link className="back-btn" to="/order-history">
          Back
      </Link>
      </div>
    </div>
  )
})

OrderInfo.propTypes = {
  order: PropTypes.object,
}
export default OrderInfo