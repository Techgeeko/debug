import React from 'react'
import type { Metadata } from "next";
import { StatsCard } from '@/components/shared/Parts/Dashboard/statsCard';
import { ActivityFeed } from '@/components/shared/Parts/Dashboard/activityFeed';
import { ClientsTable } from '@/components/shared/Parts/Dashboard/clientsTable';
import { QuotesTable } from '@/components/shared/Parts/Dashboard/quotesTable';
import { Quote } from '@/components/shared/Parts/Dashboard/quotesTable';

export const metadata: Metadata = {
  title: "Dashboard | Access Overview of Your Platform",
  description: "Access key recruitment metrics, AI-powered candidate recommendations, and job performance insights. Streamline your hiring process with Zaap Recruits' comprehensive dashboard.",
  icons: {
    icon: '/favicon.ico',
  },
};

const stats = [
  {
    title: "Total Quotes Sent",
    value: "45",
    subtitle: "Quotes"
  },
  {
    title: "Total Approved Quotes",
    value: "30",
    subtitle: "Approved"
  },
  {
    title: "Total Pending Quotes",
    value: "15",
    subtitle: "Quotes"
  },
  {
    title: "Conversion Rate",
    value: "66%",
    subtitle: "Rate"
  },
  {
    title: "Revenue",
    value: "$25,000",
    subtitle: "Earned"
  }
]

const activities = [
  {
    id: "1",
    message: "Quote #Q-10012 was approved by Janet Perkins",
    timestamp: "1 min ago"
  },
  {
    id: "2",
    message: "Sent a new quote to Bob's Construction on Oct 17",
    timestamp: "10 min ago"
  },
  {
    id: "3",
    message: "Quote #Q-100022 has been viewed",
    timestamp: "20 min ago"
  },
  {
    id: "4",
    message: "Reminder: Follow up with Tim's Plumbing (Pending Quote)",
    timestamp: "25 min ago"
  }
]

const clients = [
  {
    name: "Andre Blackman",
    quoteSent: 10,
    approved: 8,
    pending: 2
  },
  {
    name: "Oliver Peyre",
    quoteSent: 5,
    approved: 3,
    pending: 2
  },
  {
    name: "Deborah Mecca",
    quoteSent: 4,
    approved: 3,
    pending: 1
  },
  {
    name: "Bob's Construction",
    quoteSent: 3,
    approved: 2,
    pending: 1
  }
]

const quotes: Quote[] = [
  {
    id: "1",
    quoteId: "#Q-100022",
    client: "Bob's Construction",
    status: "pending",
    amount: 5000,
    date: "Oct 12, 2024"
  },
  {
    id: "2",
    quoteId: "#Q-100023",
    client: "ACME Marketing",
    status: "rejected",
    amount: 800,
    date: "Oct 10, 2024"
  },
  {
    id: "3",
    quoteId: "#Q-100024",
    client: "Deborah Mecca",
    status: "approved",
    amount: 1200,
    date: "Oct 9, 2024"
  },
  {
    id: "4",
    quoteId: "#Q-100025",
    client: "Andre Blackman",
    status: "approved",
    amount: 3500,
    date: "Oct 9, 2024"
  }
]

export default function Dashboard() {
  return (
    <div className='h-full flex-1'>
      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {stats.map((stat) => (
            <StatsCard key={stat.title} {...stat} />
          ))}
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <ActivityFeed activities={activities} />
          <ClientsTable clients={clients} />
        </div>
        <QuotesTable quotes={quotes} />
      </div>
    </div>
  )
}