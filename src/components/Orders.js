import React, { useState } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import "../assets/styles/Orders.css";

const CustomerOrders = () => {
  const [orders, setOrders] = useState([
    { id: 1, orderId: "ORD101", customerId: "CUST001", itemId: "ITM500", paymentMethod: "Card" },
    { id: 2, orderId: "ORD102", customerId: "CUST002", itemId: "ITM501", paymentMethod: "Cash" }
  ]);

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Customer Orders Report", 14, 22);

    const tableColumn = ["Order ID", "Customer ID", "Item ID", "Payment Method"];
    const tableRows = orders.map(order => [
      order.orderId,
      order.customerId,
      order.itemId,
      order.paymentMethod
    ]);

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 30
    });

    doc.save("customer_orders_report.pdf");
  };

  return (
      <div className="customer-orders-container">
        <h2>Customer Orders</h2>

        {/* Report Button */}
        <button className="report-btn" onClick={generatePDF}>Generate PDF Report</button>

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
