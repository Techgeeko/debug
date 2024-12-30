import React from 'react'
import type { Metadata } from "next";
import { auth } from '@clerk/nextjs/server';
// import { redirect } from 'next/navigation';
import { getInvoices, getInvoiceStats } from '@/lib/actions/invoices.actions';
import { getClients } from '@/lib/actions/clients.actions';
import { AddInvoiceDialog } from '@/components/shared/Pages/invoicesPage/addInvoiceDialog';
import { InvoiceStats } from '@/components/shared/Pages/invoicesPage/invoiceStats';
import { InvoiceList } from '@/components/shared/Pages/invoicesPage/invoiceList';

export const metadata: Metadata = {
  title: "Invoices | Manage your invoices",
  description: "Create, Track and Manages Invoices.",
  icons: {
    icon: '/favicon.ico',
  },
};
export default async function InvoicesPage() {
  const { userId } = await auth();
  if (!userId) {
    return;
  }

  const [invoices, stats, clients] = await Promise.all([
    getInvoices().then(invoices => invoices ? invoices.map(invoice => ({
      ...invoice,
      invoice: {
        ...invoice.invoice,
        amount: parseFloat(invoice.invoice.amount),
        status: invoice.invoice.status as "pending" | "sent" | "paid" | "overdue"
      }
    })) : []),  // Correctly structured invoices
    getInvoiceStats(),
    getClients(),
  ]);

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Invoices</h1>
          <p className="text-gray-600">Manage your invoices and payments</p>
        </div>
        {clients && <AddInvoiceDialog clients={clients} />}
      </div>

      {stats && (
        <InvoiceStats 
          total={stats.total || 0} 
          paid={stats.paid || 0} 
          pending={stats.pending || 0} 
          totalAmount={stats.totalAmount || 0} 
        />
      )}
      
      <div>
        <h2 className="text-2xl font-semibold mb-4">Invoice List</h2>
        {/* Pass invoices directly to InvoiceList */}
        <InvoiceList invoices={invoices || []} />
      </div>
    </div>
  );
}
