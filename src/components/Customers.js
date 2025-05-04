import React, { useState } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../assets/styles/Customers.css"; // Adjust the path if needed

const Customer = () => {
  const [customers, setCustomers] = useState([
    { id: 1, name: "Customer A", email: "customerA@example.com", address: "Address A", contactNo: "1234567890" },
    { id: 2, name: "Customer B", email: "customerB@example.com", address: "Address B", contactNo: "0987654321" },
  ]);

  const [newCustomer, setNewCustomer] = useState({ name: "", email: "", address: "", contactNo: "" });

  const handleChange = (e) => {
    setNewCustomer({ ...newCustomer, [e.target.name]: e.target.value });
  };

  const addCustomer = () => {
    const { name, email, address, contactNo } = newCustomer;

    if (!name.trim()) {
      toast.error("Customer name is required");
      return;
    }
    if (!email.trim()) {
      toast.error("Email is required");
      return;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.error("Invalid email format");
      return;
    }
    if (!address.trim()) {
      toast.error("Address is required");
      return;
    }
    if (!contactNo.trim()) {
      toast.error("Contact number is required");
      return;
    } else if (!/^\d{10}$/.test(contactNo)) {
      toast.error("Contact number must be exactly 10 digits");
      return;
    }

    setCustomers([...customers, { id: customers.length + 1, ...newCustomer }]);
    setNewCustomer({ name: "", email: "", address: "", contactNo: "" });
    toast.success("Customer added successfully!");
  };

  const deleteCustomer = (id) => {
    setCustomers(customers.filter((customer) => customer.id !== id));
    toast.info("Customer deleted");
  };

  const generatePDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text("Customer Report", 14, 22);

    const tableColumn = ["ID", "Name", "Email", "Address", "Contact No"];
    const tableRows = customers.map((customer) => [
      customer.id,
      customer.name,
      customer.email,
      customer.address,
      customer.contactNo
    ]);

    autoTable(doc, {
      head: [tableColumn],
      body: tableRows,
      startY: 30
    });

    doc.save("customer_report.pdf");
    toast.success("PDF report generated");
  };

  return (
      <div className="customer-container">
        <h2>Customer Management</h2>

        {/* Report Button */}
        <button className="report-btn" onClick={generatePDF}>Generate PDF Report</button>

        {/* Customer Form */}
        <div className="form-container">
          <h3>Add New Customer</h3>
          <label>Customer Name:</label>
          <input type="text" name="name" value={newCustomer.name} onChange={handleChange} />

          <label>Email:</label>
          <input type="email" name="email" value={newCustomer.email} onChange={handleChange} />

          <label>Address:</label>
          <input type="text" name="address" value={newCustomer.address} onChange={handleChange} />

          <label>Contact No:</label>
          <input type="text" name="contactNo" value={newCustomer.contactNo} onChange={handleChange} />

          <button onClick={addCustomer} className="add-btn">Add Customer</button>
        </div>

        {/* Customer List Table */}
        <div className="table-container">
          <table>
            <thead>
            <tr>
              <th colSpan="6" className="table-title">List of Customers</th>
            </tr>
            <tr>
              <th>Customer Id</th>
              <th>Customer Name</th>
              <th>Email</th>
              <th>Address</th>
              <th>Contact No</th>
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
                  <td>{customer.contactNo}</td>
                  <td>
                    <button className="edit-btn">Edit</button>
                    <button className="delete-btn" onClick={() => deleteCustomer(customer.id)}>Delete</button>
                  </td>
                </tr>
            ))}
            </tbody>
          </table>
        </div>

        {/* Toast Container */}
        <ToastContainer position="top-right" autoClose={3000} />
      </div>
  );
};

export default Customer;