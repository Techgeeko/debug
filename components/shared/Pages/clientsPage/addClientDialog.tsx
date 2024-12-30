"use client"

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'

import { UserPlus } from 'lucide-react'
import { createClient } from '@/lib/actions/clients.actions'

export function AddClientDialog() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <UserPlus className="mr-2 h-4 w-4" />
          Add Client
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Client</DialogTitle>
        </DialogHeader>
        <form
          action={async (formData) => {
            await createClient(formData)
            setOpen(false)
          }}
          className="space-y-4"
        >
          <Input
            name="name"
            placeholder="Client name"
            required
          />
          <Input
            name="email"
            type="email"
            placeholder="Email address"
            required
          />
          <Input
            name="phone"
            type="tel"
            placeholder="Phone number"
            required
          />
          <Input
            name="companyName"
            placeholder="Company name"
            required
          />
          <Input
            name="billingAddress"
            placeholder="Billing address"
            required
          />
          <Input
            name="notes"
            placeholder="Additional notes (optional)"
          />
          <Input
            name="projectCount"
            type="number"
            placeholder="Number of projects"
            defaultValue={0}
          />
          <div className="flex items-center space-x-2">
            <label htmlFor="isActive" className="text-sm">
              Active
            </label>
            <Input
              id="isActive"
              name="isActive"
              type="checkbox"
              defaultChecked
            />
          </div>
          <Button type="submit" className="w-full">
            Create Client
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}
