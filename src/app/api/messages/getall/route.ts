import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma'; // Pastikan path ini benar ke file prisma client Anda

export async function GET() {
  try {
    const messages = await prisma.message.findMany({
      orderBy: {
        createdAt: 'desc', // Tampilkan pesan terbaru terlebih dahulu
      },
    });

    return NextResponse.json(messages, { status: 200 });
  } catch (error) {
    console.error('Failed to fetch messages:', error);
    return NextResponse.json(
      { error: 'Failed to fetch messages' },
      { status: 500 }
    );
  }
}
