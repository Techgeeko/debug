'use client'

import React, { useState } from 'react'
import { MessageCircle, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { toast } from "sonner"

interface FloatingSupportProps {
  supportEmail: string
}

export function FloatingSupport({ supportEmail }: FloatingSupportProps) {
  const [showSupport, setShowSupport] = useState(false)
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')
  const [isSending, setIsSending] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSending(true)

    try {
      const response = await fetch('/api/send-support-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ subject, message, supportEmail }),
      })

      if (response.ok) {
        toast.success("Email sent successfully We'll get back to you as soon as possible."
        )
        setSubject('')
        setMessage('')
        setShowSupport(false)
      } else {
        throw new Error('Failed to send email')
      }
    } catch {
      toast.error("Error: Failed to send email. Please try again later.")
    } finally {
      setIsSending(false)
    }
  }

  return (
    <div>
      {showSupport ? (
        <div className="bg-background border shadow-lg rounded-lg w-80 p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-lg">Having Issues or Request?</h3>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setShowSupport(false)}
              aria-label="Close support form"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium">
                Subject
              </label>
              <Input
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
                placeholder="Enter the subject"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <Textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                placeholder="Enter your message"
                rows={4}
              />
            </div>
            <Button type="submit" className="w-full" disabled={isSending}>
              {isSending ? 'Sending...' : 'Send Feedback'}
            </Button>
          </form>
        </div>
      ) : (
        <Button
          onClick={() => setShowSupport(true)}
          size="icon"
          className="rounded-full h-12 w-12"
          aria-label="Open support form"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}
    </div>
  )
}