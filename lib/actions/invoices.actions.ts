'use server'

import { db } from '../database';
import { auth } from '@clerk/nextjs/server'
import { and, eq } from "drizzle-orm";
import { Invoices, NewInvoice, Clients } from '../database/schema';
import { revalidatePath } from 'next/cache';

export async function createInvoice(formData: FormData) {
  const { userId } = await auth();
  if (!userId) {
    return;
  }

  const newInvoice: NewInvoice = {
    userId: parseInt(userId),
    clientId: parseInt(formData.get('clientId') as string),
    amount: parseInt(formData.get('amount') as string).toString(),
    description: formData.get('description') as string,
    tax: formData.get('tax') ? formData.get('tax') as string : '0',
    discount: formData.get('discount') ? formData.get('discount') as string : '0',
    status: formData.get('status') as 'pending' | 'sent' |'paid' |'overdue',
    dueDate: formData.get('dueDate') ? new Date(formData.get('dueDate') as string) : null,
  };

  const [invoice] = await db.insert(Invoices).values(newInvoice).returning();

  revalidatePath('/invoices');
  return invoice;
}

export async function updateInvoiceStatus(invoiceId: number, status: 'pending' | 'sent' | 'paid' | 'overdue') {
  const { userId } = await auth();
  if (!userId) {
    return;
  }

  const [invoice] = await db
    .update(Invoices)
    .set({ status })
    .where(and(eq(Invoices.id, invoiceId), eq(Invoices.userId, parseInt(userId))))
    .returning();

  revalidatePath('/invoices');
  return invoice;
}

export async function getInvoices() {
  const { userId } = await auth();

  if (!userId) {
    return;
  }
  const invoices = await db
    .select({
      invoice: Invoices,
      clientName: Clients.name,
    })
    .from(Invoices)
    .leftJoin(Clients, eq(Invoices.clientId, Clients.id))
    .where(eq(Invoices.userId, parseInt(userId)))
    .orderBy(Invoices.createdAt);

  return invoices;
}

export async function getInvoiceStats() {
  const { userId } = await auth();
  if (!userId) {
    return
  }

  const invoices = await db
    .select()
    .from(Invoices)
    .where(eq(Invoices.userId, parseInt(userId)));

  const total = invoices.length;
  const paid = invoices.filter(inv => inv.status === 'paid').length;
  const pending = invoices.filter(inv => inv.status === 'pending' || inv.status === 'sent' || inv.status === 'paid' || inv.status === 'overdue').length;
  const totalAmount = invoices.reduce((sum, inv) => sum + parseFloat(inv.amount), 0);

  return { total, paid, pending, totalAmount };
}

export async function linkInvoiceToQuote(invoiceId: number, quoteId: number) {
  const { userId } = await auth();
  if (!userId) {
    return;
  }

  // This is a placeholder for the quote linking functionality
  // You would need to implement the actual quote table and relationship
  console.log(`Linking invoice ${invoiceId} to quote ${quoteId}`);
  
  revalidatePath('/invoices');
}

