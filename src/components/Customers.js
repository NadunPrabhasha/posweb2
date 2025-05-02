import React, { useState } from "react";
import "../assets/styles/Customers.css"; // Create and style this file


const Customer = () => {
  const [customers, setCustomers] = useState([
    { id: 1, name: "Customer A", email: "customerA@example.com", address: "Address A" },
    { id: 2, name: "Customer B", email: "customerB@example.com", address: "Address B" },
  ]);

  const [newCustomer, setNewCustomer] = useState({ name: "", email: "", address: "" });

  const handleChange = (e) => {
    setNewCustomer({ ...newCustomer, [e.target.name]: e.target.value });
  };

  const addCustomer = () => {
    if (newCustomer.name && newCustomer.email && newCustomer.address) {
      setCustomers([...customers, { id: customers.length + 1, ...newCustomer }]);
      setNewCustomer({ name: "", email: "", address: "" });
    }
  };

  const deleteCustomer = (id) => {
    setCustomers(customers.filter((customer) => customer.id !== id));
  };

  return (
    <div className="customer-container">
      <h2>Customer Management</h2>
      
      {/* Customer Form */}
      <div className="customer-form">
        <label>Customer Name:</label>
        <input type="text" name="name" value={newCustomer.name} onChange={handleChange} />
        
        <label>Email:</label>
        <input type="email" name="email" value={newCustomer.email} onChange={handleChange} />

        <label>Address:</label>
        <input type="text" name="address" value={newCustomer.address} onChange={handleChange} />

        <button onClick={addCustomer} className="add-btn">Add Customer</button>
      </div>

      {/* Customer List Table */}
      <h3>List of Customers</h3>
      <table>
        <thead>
          <tr>
            <th>Customer Id</th>
            <th>Customer Name</th>
            <th>Email</th>
            <th>Address</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((customer) => (
            <tr key={customer.id}>
              <td>{customer.id}</td>
              <td>{customer.name}</td>
              <td>{customer.email}</td>
              <td>{customer.address}</td>
              <td>
                <button className="edit-btn">Edit</button>
                <button className="delete-btn" onClick={() => deleteCustomer(customer.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Customer;
