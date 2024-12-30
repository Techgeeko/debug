import React from 'react'
import type { Metadata } from "next";
import { auth } from '@clerk/nextjs/server'
import { redirect } from 'next/navigation'
import { getClients, getClientStats } from '@/lib/actions/clients.actions';
import { ClientList } from '@/components/shared/Pages/clientsPage/clientList';
import { ClientStats } from '@/components/shared/Pages/clientsPage/clientStats'; 
import { AddClientDialog } from '@/components/shared/Pages/clientsPage/addClientDialog'; 

export const metadata: Metadata = {
  title: "Clients | Access Overview of Your Platform",
  description: "Access key recruitment metrics, AI-powered candidate recommendations, and job performance insights. Streamline your hiring process with Zaap Recruits' comprehensive dashboard.",
  icons: {
    icon: '/favicon.ico',
  },
};

export default async function ClientsPage() {
  const { userId } = await auth();
  if (!userId) redirect('/sign-in')

  const [clients, stats] = await Promise.all([
    getClients(),
    getClientStats(),
  ])

  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">Clients</h1>
          <p className="text-gray-600">Manage your client relationships</p>
        </div>
        <AddClientDialog />
      </div>

      {stats && (
        <ClientStats 
          total={stats.total ?? 0} 
          active={stats.active ?? 0} 
          totalProjects={stats.totalProjects ?? 0} 
        />
      )}
      
      <div>
        <h2 className="text-2xl font-semibold mb-4">Client List</h2>
        <ClientList clients={clients ?? []} />
      </div>
    </div>
  )
}
