"use client";

import { useState } from 'react';

interface Quote {
  id: number;
  quoteNo: string;
  customer: string;
  subtotal: number;
  discount: number;
  tax: number;
  total: number;
}

export default function QuotesPage() {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [quoteNo, setQuoteNo] = useState('');
  const [customer, setCustomer] = useState('');
  const [subtotal, setSubtotal] = useState<number | ''>('');
  const [discount, setDiscount] = useState<number | ''>('');
  const [tax, setTax] = useState<number | ''>('');

  const addQuote = (e: React.FormEvent) => {
    e.preventDefault();
    const sub = subtotal === '' ? 0 : Number(subtotal);
    const disc = discount === '' ? 0 : Number(discount);
    const tx = tax === '' ? 0 : Number(tax);
    const total = sub - disc + tx;
    const newQuote: Quote = {
      id: Date.now(),
      quoteNo,
      customer,
      subtotal: sub,
      discount: disc,
      tax: tx,
      total,
    };
    setQuotes([...quotes, newQuote]);
    setQuoteNo('');
    setCustomer('');
    setSubtotal('');
    setDiscount('');
    setTax('');
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Quotes</h1>
      <form onSubmit={addQuote} className="space-y-4 mb-6">
        <div className="flex flex-col">
          <label className="font-medium">Quote Number</label>
          <input
            type="text"
            value={quoteNo}
            onChange={(e) => setQuoteNo(e.target.value)}
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
          <label className="font-medium">Subtotal</label>
          <input
            type="number"
            value={subtotal}
            onChange={(e) => setSubtotal(e.target.value === '' ? '' : Number(e.target.value))}
            className="border p-2 rounded"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-medium">Discount</label>
          <input
            type="number"
            value={discount}
            onChange={(e) => setDiscount(e.target.value === '' ? '' : Number(e.target.value))}
            className="border p-2 rounded"
          />
        </div>
        <div className="flex flex-col">
          <label className="font-medium">Tax</label>
          <input
            type="number"
            value={tax}
            onChange={(e) => setTax(e.target.value === '' ? '' : Number(e.target.value))}
            className="border p-2 rounded"
          />
        </div>
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">
          Add Quote
        </button>
      </form>
      <table className="min-w-full border text-sm">
        <thead>
          <tr className="bg-gray-100">
            <th className="border p-2">Quote #</th>
            <th className="border p-2">Customer</th>
            <th className="border p-2">Subtotal</th>
            <th className="border p-2">Discount</th>
            <th className="border p-2">Tax</th>
            <th className="border p-2">Total</th>
          </tr>
        </thead>
        <tbody>
          {quotes.map((q) => (
            <tr key={q.id}>
              <td className="border p-2">{q.quoteNo}</td>
              <td className="border p-2">{q.customer}</td>
              <td className="border p-2">{q.subtotal}</td>
              <td className="border p-2">{q.discount}</td>
              <td className="border p-2">{q.tax}</td>
              <td className="border p-2">{q.total}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
