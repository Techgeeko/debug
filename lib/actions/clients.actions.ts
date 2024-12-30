'use server'

import { db } from '../database';
import { auth } from '@clerk/nextjs/server'
import { eq } from "drizzle-orm";
import { Clients, NewClient } from '../database/schema';
import { revalidatePath } from 'next/cache';

export async function createClient(formData: FormData) {
  const { userId } = await auth();
  if (!userId) {
    return;
  }

  const newClient: NewClient = {
    userId: Number(userId),
    name: formData.get('name') as string,
    email: formData.get('email') as string,
    phone: formData.get('phone') as string,
    companyName: formData.get('company_name') as string,
    billingAddress: formData.get('billing_address') as string,
    notes: formData.get('notes') as string,
  };

  const [client] = await db.insert(Clients).values(newClient).returning();

  revalidatePath('/clients');
  return client;
}

export async function getClients() {
  const { userId } = await auth();
  if (!userId) {
    return;
  }

  const clients = await db
    .select()
    .from(Clients)
    .where(eq(Clients.userId, Number(userId)));

  return clients;
}

export async function getClientStats() {
  const { userId } = await auth();
  if (!userId) {
    return;
  }

  const clients = await db
    .select()
    .from(Clients)
    .where(eq(Clients.userId, Number(userId)));

  const total = clients.length;
  const active = clients.filter(client => client.isActive).length;
  const totalProjects = clients.reduce((sum, client) => sum + (client.projectCount || 0), 0);

  return { total, active, totalProjects };
}

export async function toggleClientStatus(clientId: number) {
  const { userId } = await auth();
  if (!userId) {
    return;
  }

  const [client] = await db
    .select()
    .from(Clients)
    .where(eq(Clients.id, clientId));

  if (!client) {
    return;
  }

  const [updatedClient] = await db
    .update(Clients)
    .set({ 
      isActive:!client.isActive,
     updatedAt: new Date()
    })
    .where(eq(Clients.id, clientId))
    .returning();

  revalidatePath('/clients');
  return updatedClient;
}

