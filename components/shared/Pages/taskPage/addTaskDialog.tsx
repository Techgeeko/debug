'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import {  Dialog,  DialogContent,  DialogHeader,  DialogTitle,  DialogTrigger } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import {  Select,  SelectContent,  SelectItem,  SelectTrigger,  SelectValue } from '@/components/ui/select'
import { createTask } from '@/lib/actions/task.actions'

export function AddTaskDialog() {
  const [open, setOpen] = useState(false)

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button>
          <span className="mr-2">+</span> Add Task
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Task</DialogTitle>
        </DialogHeader>
        <form
          action={async (formData) => {
            await createTask(formData)
            setOpen(false)
          }}
          className="space-y-4"
        >
          <Input
            name="title"
            placeholder="Task title"
            required
          />
          <Select name="priority" required>
            <SelectTrigger>
              <SelectValue placeholder="Select priority" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="low">Low</SelectItem>
              <SelectItem value="medium">Medium</SelectItem>
              <SelectItem value="high">High</SelectItem>
            </SelectContent>
          </Select>
          <Input
            type="date"
            name="dueDate"
            required
          />
          <Button type="submit" className="w-full">
            Create Task
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

