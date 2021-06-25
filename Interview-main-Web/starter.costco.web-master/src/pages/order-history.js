import React, { useEffect, useState } from "react"
import getOrders from "../services/order.service"
import Order from "../components/order-history/Order"
import "./order-history.css"

const OrderHistory = () => {
  const [orders, setOrders] = useState([])
  const [allOrders, setAllOrders] = useState([])
  const [searchInput, setSearchInput] = useState("")
  useEffect(() => {
    async function getOrdersList() {
      const ordersList = await getOrders()
      setOrders(ordersList)
      setAllOrders(ordersList)
    }
    getOrdersList()
  }, [])

  const handleSearch = event => {
    const { value } = event.target
    setSearchInput(value)
    const list = allOrders.filter(
      order => order.orderName.toLowerCase().toLowerCase().indexOf(value) > -1
    )
    setOrders(list)
  }

  return (
    <div className="order-history-page">
      <div className="search-container">
        <input
          type="search"
          name="search"
          className="search-orders"
          value={searchInput}
          onChange={handleSearch}
          placeholder="Search in orders"
        />
      </div>
      {orders.map(order => (
        <Order key={order.orderId} order={order} />
      ))}
    </div>
  )
}

export default OrderHistory
