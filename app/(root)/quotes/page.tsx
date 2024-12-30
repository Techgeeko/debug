import React from 'react'
import type { Metadata } from "next";
import { UserButton } from '@clerk/nextjs';

export const metadata: Metadata = {
  title: "Quotes | Access Overview of Your Platform",
  description: "Access key recruitment metrics, AI-powered candidate recommendations, and job performance insights. Streamline your hiring process with Zaap Recruits' comprehensive dashboard.",
  icons: {
    icon: '/favicon.ico',
  },
};

export default function Quotes () {
  return (
    <div>Quotes
      <UserButton />
    </div>
  )
}