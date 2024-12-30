"use client"

import { useState } from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Client } from '@/lib/database/schema'
import { toggleClientStatus } from '@/lib/actions/clients.actions'

interface ClientListProps {
  clients: Client[]
}

export function ClientList({ clients: initialClients }: ClientListProps) {
  const [clients, setClients] = useState(initialClients)

  const handleStatusToggle = async (clientId: number) => {
    const updatedClient = await toggleClientStatus(clientId)
    if (updatedClient) {
      setClients(clients.map(client => 
        client.id === clientId ? updatedClient : client
      ))
    }
  }

  return (
    <div className="rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Phone</TableHead>
            <TableHead>Company</TableHead>
            <TableHead>Billing Address</TableHead>
            <TableHead>Projects</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Notes</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {clients.map((client) => (
            <TableRow key={client.id}>
              <TableCell className="font-medium">{client.name}</TableCell>
              <TableCell>{client.email}</TableCell>
              <TableCell>{client.phone}</TableCell>
              <TableCell>{client.companyName}</TableCell>
              <TableCell>{client.billingAddress}</TableCell>
              <TableCell>{client.projectCount}</TableCell>
              <TableCell>
                <Button
                  variant="ghost"
                  onClick={() => handleStatusToggle(client.id)}
                >
                  <Badge variant={client.isActive ? "default" : "secondary"}>
                    {client.isActive ? 'Active' : 'Inactive'}
                  </Badge>
                </Button>
              </TableCell>
              <TableCell>{client.notes || 'N/A'}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
