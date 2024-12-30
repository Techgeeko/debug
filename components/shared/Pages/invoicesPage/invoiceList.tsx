'use client'

import { useState } from 'react'
import { format } from 'date-fns'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Link, MoreVertical } from 'lucide-react'
import { linkInvoiceToQuote, updateInvoiceStatus } from '@/lib/actions/invoices.actions'

interface InvoiceWithClient {
  invoice: {
    id: number;
    amount: number;
    status: 'draft' | 'pending' | 'paid' | 'sent' | 'viewed' | 'partially-paid' | 'overdue' | 'cancelled';
    dueDate: Date | null;
    createdAt: Date;
  };
  clientName: string | null;
}

interface InvoiceListProps {
  invoices: InvoiceWithClient[];
}

export function InvoiceList({ invoices: initialInvoices }: InvoiceListProps) {
  const [invoices, setInvoices] = useState(initialInvoices)

  const handleStatusUpdate = async (invoiceId: number, status: 'draft' | 'paid' | 'sent' | 'viewed' | 'partially-paid' | 'overdue' | 'cancelled'): Promise<void> => {
    const updatedInvoice = await updateInvoiceStatus(invoiceId, status)
    setInvoices(invoices.map(inv => 
      inv.invoice.id === invoiceId 
        ? { ...inv, invoice: { ...inv.invoice, status: updatedInvoice.status }} 
        : inv
    ))
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'paid': return 'default'
      case 'pending': return 'destructive'
      default: return 'secondary'
    }
  }

  return (
    <div className="rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Client</TableHead>
            <TableHead>Amount</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Due Date</TableHead>
            <TableHead>Created</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {invoices.map(({ invoice, clientName }) => (
            <TableRow key={invoice.id}>
              <TableCell className="font-medium">{clientName}</TableCell>
              <TableCell>${(invoice.amount / 100).toFixed(2)}</TableCell>
              <TableCell>
                <Badge variant={getStatusColor(invoice.status)}>
                  {invoice.status}
                </Badge>
              </TableCell>
              <TableCell>
                {invoice.dueDate ? format(invoice.dueDate, 'MMM dd, yyyy') : '-'}
              </TableCell>
              <TableCell>{format(invoice.createdAt, 'MMM dd, yyyy')}</TableCell>
              <TableCell className="text-right">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => handleStatusUpdate(invoice.id, 'paid')}>
                      Mark as Paid
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => linkInvoiceToQuote(invoice.id, 0)}>
                      <Link className="h-4 w-4 mr-2" />
                      Link to Quote
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
