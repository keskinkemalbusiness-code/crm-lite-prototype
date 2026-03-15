'use client';

import { useState } from 'react';

export default function LeadsPage() {
  const [leads, setLeads] = useState<Array<any>>([]);
  const [form, setForm] = useState({ name: '', company: '', email: '', phone: '', source: '', status: '', score: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLeads([...leads, form]);
    setForm({ name: '', company: '', email: '', phone: '', source: '', status: '', score: '' });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Leads</h1>
      <form onSubmit={handleSubmit} className="space-y-2 mb-4">
        <input
          name="name"
          placeholder="Name"
          className="border p-2 w-full"
          value={form.name}
          onChange={handleChange}
        />
        <input
          name="company"
          placeholder="Company"
          className="border p-2 w-full"
          value={form.company}
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
          name="phone"
          placeholder="Phone"
          className="border p-2 w-full"
          value={form.phone}
          onChange={handleChange}
        />
        <input
          name="source"
          placeholder="Source"
          className="border p-2 w-full"
          value={form.source}
          onChange={handleChange}
        />
        <input
          name="status"
          placeholder="Status"
          className="border p-2 w-full"
          value={form.status}
          onChange={handleChange}
        />
        <input
          name="score"
          placeholder="Score"
          className="border p-2 w-full"
          value={form.score}
          onChange={handleChange}
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Add Lead
        </button>
      </form>
      <table className="min-w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-2 py-1 text-left">Name</th>
            <th className="border px-2 py-1 text-left">Company</th>
            <th className="border px-2 py-1 text-left">Email</th>
            <th className="border px-2 py-1 text-left">Phone</th>
            <th className="border px-2 py-1 text-left">Source</th>
            <th className="border px-2 py-1 text-left">Status</th>
            <th className="border px-2 py-1 text-left">Score</th>
          </tr>
        </thead>
        <tbody>
          {leads.map((lead, index) => (
            <tr key={index} className="border-t">
              <td className="border px-2 py-1">{lead.name}</td>
              <td className="border px-2 py-1">{lead.company}</td>
              <td className="border px-2 py-1">{lead.email}</td>
              <td className="border px-2 py-1">{lead.phone}</td>
              <td className="border px-2 py-1">{lead.source}</td>
              <td className="border px-2 py-1">{lead.status}</td>
              <td className="border px-2 py-1">{lead.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
