'use client';

import { useState } from 'react';

export default function CustomersPage() {
  const [customers, setCustomers] = useState<Array<any>>([]);
  const [form, setForm] = useState({ name: '', taxNumber: '', phone: '', email: '', address: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setCustomers([...customers, form]);
    setForm({ name: '', taxNumber: '', phone: '', email: '', address: '' });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Customers</h1>
      <form onSubmit={handleSubmit} className="space-y-2 mb-4">
        <input
          name="name"
          placeholder="Name"
          className="border p-2 w-full"
          value={form.name}
          onChange={handleChange}
        />
        <input
          name="taxNumber"
          placeholder="Tax Number"
          className="border p-2 w-full"
          value={form.taxNumber}
          onChange={handleChange}
        />
        <input
          name="phone"
          placeholder="Phone"
          className="border p-2 w-full"
          value={form.phone}
          onChange={handleChange}
        />
        <input
          name="email"
          placeholder="Email"
          className="border p-2 w-full"
          value={form.email}
          onChange={handleChange}
        />
        <input
          name="address"
          placeholder="Address"
          className="border p-2 w-full"
          value={form.address}
          onChange={handleChange}
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Add Customer
        </button>
      </form>
      <table className="min-w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-2 py-1 text-left">Name</th>
            <th className="border px-2 py-1 text-left">Tax Number</th>
            <th className="border px-2 py-1 text-left">Phone</th>
            <th className="border px-2 py-1 text-left">Email</th>
            <th className="border px-2 py-1 text-left">Address</th>
          </tr>
        </thead>
        <tbody>
          {customers.map((c, index) => (
            <tr key={index} className="border-t">
              <td className="border px-2 py-1">{c.name}</td>
              <td className="border px-2 py-1">{c.taxNumber}</td>
              <td className="border px-2 py-1">{c.phone}</td>
              <td className="border px-2 py-1">{c.email}</td>
              <td className="border px-2 py-1">{c.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
