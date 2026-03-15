"use client";

import { useState } from 'react';

interface Opportunity {
  id: number;
  title: string;
  customer: string;
  stage: string;
  value: number;
  probability: number;
  expectedCloseDate: string;
}

const stages = ['New', 'Meeting', 'Proposal', 'Won', 'Lost'];

export default function OpportunitiesPage() {
  const [opportunities, setOpportunities] = useState<Opportunity[]>([]);
  const [title, setTitle] = useState('');
  const [customer, setCustomer] = useState('');
  const [stage, setStage] = useState('New');
  const [value, setValue] = useState<number | ''>('');
  const [probability, setProbability] = useState<number | ''>('');
  const [expectedCloseDate, setExpectedCloseDate] = useState('');

  const addOpportunity = (e: React.FormEvent) => {
    e.preventDefault();
    const newOpportunity: Opportunity = {
      id: Date.now(),
      title,
      customer,
      stage,
      value: Number(value),
      probability: Number(probability),
      expectedCloseDate,
    };
    setOpportunities([...opportunities, newOpportunity]);
    setTitle('');
    setCustomer('');
    setStage('New');
    setValue('');
    setProbability('');
    setExpectedCloseDate('');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Opportunities</h1>
      <form onSubmit={addOpportunity} className="space-y-4 mb-6">
        <div className="flex flex-col">
          <label className="font-medium">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border p-2 rounded"
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="font-medium">Customer</label>
          <input
            type="text"
            value={customer}
            onChange={(e) => setCustomer(e.target.value)}
            className="border p-2 rounded"
            required
          />
        </div>
        <div className="flex flex-col">
          <label className="font-medium">Stage</label>
          <select
            value={stage}
            onChange={(e) => setStage(e.target.value)}
            className="border p-2 rounded"
          >
            {stages.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col">
          <label className="font-medium">Value</label>
          <input
            type="number"
            value={value}
            onChange={(e) => setValue(e.target.value === '' ? '' : Number(e.target.value))}
            className="border p-2 rounded"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-medium">Probability (%)</label>
          <input
            type="number"
            value={probability}
            onChange={(e) => setProbability(e.target.value === '' ? '' : Number(e.target.value))}
            className="border p-2 rounded"
            min="0"
            max="100"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-medium">Expected Close Date</label>
          <input
            type="date"
            value={expectedCloseDate}
            onChange={(e) => setExpectedCloseDate(e.target.value)}
            className="border p-2 rounded"
          />
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
          Add Opportunity
        </button>
      </form>
      <table className="min-w-full border text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Title</th>
            <th className="border p-2">Customer</th>
            <th className="border p-2">Stage</th>
            <th className="border p-2">Value</th>
            <th className="border p-2">Probability</th>
            <th className="border p-2">Close Date</th>
          </tr>
        </thead>
        <tbody>
          {opportunities.map((op) => (
            <tr key={op.id}>
              <td className="border p-2">{op.title}</td>
              <td className="border p-2">{op.customer}</td>
              <td className="border p-2">{op.stage}</td>
              <td className="border p-2">{op.value}</td>
              <td className="border p-2">{op.probability}</td>
              <td className="border p-2">{op.expectedCloseDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
