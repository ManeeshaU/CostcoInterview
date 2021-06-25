import ordersData from "./orders.json"

const getOrders = () =>
  new Promise((resolve, reject) => {
    resolve(ordersData.orders)
  })

export default getOrders
