import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'
import { revalidatePath } from 'next/cache'

const prisma = new PrismaClient()

export async function POST(request: Request) {
  try {
    const { name, message } = await request.json()

    const newMessage = await prisma.message.create({
      data: {
        name,
        message,
      },
    })

    // Revalidate the messages path after a new message is created
    revalidatePath('/messages')

    return NextResponse.json(newMessage, { status: 201 })
  } catch (error) {
    console.error('Failed to create message:', error)
    return NextResponse.json(
      { error: 'Failed to create message' },
      { status: 500 }
    )
  }
}
