/* eslint-disable react/require-default-props */
import React from "react"
import "./Order.css"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Order = ({ order }) => (
  <div className="order">
    <div className="order-header">
      <small>ORDER NO: {order.orderId}</small>
      <small>CREATED ON: {order.createdOn}</small>
    </div>
    <div className="order-details">
      <h1 className="order-name">{order.orderName}</h1>
      <p className="order-description">{order.orderDescription}</p>
    </div>
    <div className="text-center">
      <Link className="view-order-btn" to="/order-details/" 
      state={{ order }}>View Order Details</Link> <br />
    </div>
  </div>
)

Order.propTypes = {
  order: PropTypes.shape({
    orderId: PropTypes.string,
    createdOn: PropTypes.string,
    orderName: PropTypes.string,
    orderDescription: PropTypes.string,
  }),
}

export default Order
