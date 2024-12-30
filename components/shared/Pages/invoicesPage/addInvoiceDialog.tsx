'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {Dialog,DialogContent,DialogHeader,DialogTitle,DialogTrigger,} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import {Select,SelectContent,SelectItem,SelectTrigger,SelectValue,} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { createInvoice } from '@/lib/actions/invoices.actions'
import { FileText } from 'lucide-react'

interface Client {
  id: number;
  name: string;
}

interface AddInvoiceDialogProps {
  clients: Client[];
}

export function AddInvoiceDialog({ clients }: AddInvoiceDialogProps) {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <FileText className="mr-2 h-4 w-4" />
          Create Invoice
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Create New Invoice</DialogTitle>
        </DialogHeader>
        <form
          action={async (formData) => {
            await createInvoice(formData)
            setOpen(false)
          }}
          className="space-y-4"
        >
          <Select name="clientId" required>
            <SelectTrigger>
              <SelectValue placeholder="Select client" />
            </SelectTrigger>
            <SelectContent>
              {clients.map((client) => (
                <SelectItem key={client.id} value={client.id.toString()}>
                  {client.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>

          <Input
            name="amount"
            type="number"
            placeholder="Amount (in cents)"
            required
          />

          <Textarea
            name="description"
            placeholder="Invoice description"
            required
          />

          <Input
            name="tax"
            type="number"
            step="0.01"
            placeholder="Tax rate (optional)"
          />

          <Input
            name="discount"
            type="number"
            step="0.01"
            placeholder="Discount (optional)"
          />

          <Select name="status" required>
            <SelectTrigger>
              <SelectValue placeholder="Select status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="paid">Paid</SelectItem>
              <SelectItem value="overdue">Overdue</SelectItem>
            </SelectContent>
          </Select>

          <Input
            type="date"
            name="dueDate"
            required
          />

          <Button type="submit" className="w-full">
            Create Invoice
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

