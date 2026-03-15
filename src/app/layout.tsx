import './globals.css';
import Link from 'next/link';

export const metadata = {
  title: 'CRM Lite Prototype'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="flex min-h-screen">
        <aside className="w-64 bg-gray-100 p-4">
          <nav className="flex flex-col space-y-2">
            <Link href="/" className="text-blue-600 hover:underline">Dashboard</Link>
            <Link href="/customers" className="text-blue-600 hover:underline">Customers</Link>
            <Link href="/leads" className="text-blue-600 hover:underline">Leads</Link>
            <Link href="/opportunities" className="text-blue-600 hover:underline">Opportunities</Link>
            <Link href="/products" className="text-blue-600 hover:underline">Products</Link>
            <Link href="/quotes" className="text-blue-600 hover:underline">Quotes</Link>
          </nav>
        </aside>
        <main className="flex-1 p-6">
          {children}
        </main>
      </body>
    </html>
  );
}
