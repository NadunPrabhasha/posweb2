import React, { useState } from "react";
import "../assets/styles/Orders.css"; // Make sure this CSS file exists


const CustomerOrders = () => {
  // Sample data for the table
  const [orders, setOrders] = useState([
    { id: 1, orderId: "ORD101", customerId: "CUST001", itemId: "ITM500", paymentMethod: "Card" },
    { id: 2, orderId: "ORD102", customerId: "CUST002", itemId: "ITM501", paymentMethod: "Cash" }
  ]);

  return (
    <div className="customer-orders-container">
      <h2>Customer Orders</h2>

      {/* Order Form */}
      <div className="order-form">
        <label>Order ID: <input type="text" /></label>
        <label>Customer ID: <input type="text" /></label>
        <label>Item ID: <input type="text" /></label>
        <label>Payment Method: 
          <select>
            <option value="Card">Card</option>
            <option value="Cash">Cash</option>
          </select>
        </label>
        <button className="add-btn">Add Order</button>
      </div>

      {/* Orders Table */}
      <table>
        <thead>
          <tr>
            <th>Order Id</th>
            <th>Customer Id</th>
            <th>Item Id</th>
            <th>Payment Method</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id}>
              <td>{order.orderId}</td>
              <td>{order.customerId}</td>
              <td>{order.itemId}</td>
              <td>{order.paymentMethod}</td>
              <td>
                <button className="edit-btn">Edit</button>
                <button className="delete-btn">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerOrders;
