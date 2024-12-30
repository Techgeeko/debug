import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const { subject, message, supportEmail } = await req.json()

  // In a real-world scenario, you would use a proper email service here
  console.log(`Sending email to ${supportEmail}:`)
  console.log(`Subject: ${subject}`)
  console.log(`Message: ${message}`)

  // Simulate a delay and random success/failure
  await new Promise(resolve => setTimeout(resolve, 1000))
  const success = Math.random() > 0.1 // 90% success rate

  if (success) {
    return NextResponse.json({ success: true })
  } else {
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
