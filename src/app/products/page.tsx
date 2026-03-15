'use client';

import { useState } from 'react';

export default function ProductsPage() {
  const [products, setProducts] = useState<Array<any>>([]);
  const [form, setForm] = useState({ name: '', sku: '', price: '', stock: '', category: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setProducts([...products, form]);
    setForm({ name: '', sku: '', price: '', stock: '', category: '' });
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <form onSubmit={handleSubmit} className="space-y-2 mb-4">
        <input
          name="name"
          placeholder="Name"
          className="border p-2 w-full"
          value={form.name}
          onChange={handleChange}
        />
        <input
          name="sku"
          placeholder="SKU"
          className="border p-2 w-full"
          value={form.sku}
          onChange={handleChange}
        />
        <input
          name="price"
          placeholder="Price"
          className="border p-2 w-full"
          value={form.price}
          onChange={handleChange}
        />
        <input
          name="stock"
          placeholder="Stock"
          className="border p-2 w-full"
          value={form.stock}
          onChange={handleChange}
        />
        <input
          name="category"
          placeholder="Category"
          className="border p-2 w-full"
          value={form.category}
          onChange={handleChange}
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Add Product
        </button>
      </form>
      <table className="min-w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="border px-2 py-1 text-left">Name</th>
            <th className="border px-2 py-1 text-left">SKU</th>
            <th className="border px-2 py-1 text-left">Price</th>
            <th className="border px-2 py-1 text-left">Stock</th>
            <th className="border px-2 py-1 text-left">Category</th>
          </tr>
        </thead>
        <tbody>
          {products.map((p, index) => (
            <tr key={index} className="border-t">
              <td className="border px-2 py-1">{p.name}</td>
              <td className="border px-2 py-1">{p.sku}</td>
              <td className="border px-2 py-1">{p.price}</td>
              <td className="border px-2 py-1">{p.stock}</td>
              <td className="border px-2 py-1">{p.category}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
