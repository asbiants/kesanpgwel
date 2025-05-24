import {Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Message } from '@prisma/client'; // Import Message type
import Link from 'next/link'; // Import Link untuk navigasi
import { Eye } from 'lucide-react'; // Import ikon Eye
import { prisma } from '@/lib/prisma'; // Import singleton prisma instance

async function getMessages(): Promise<Message[]> {
  try {
    const messages = await prisma.message.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    return messages;
  } catch (error) {
    console.error('Failed to fetch messages in component:', error);
    return []; // Return empty array on error
  }
}

export default async function MessagesPage() {
  const messages = await getMessages();

  return (
    <div className="container mx-auto py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Daftar Kesan dan Pesan</h1>
      <div className="rounded-md border">
        <Table>
          <TableCaption>Daftar semua kesan dan pesan yang diterima.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[150px]">Nama</TableHead>
              <TableHead>Pesan</TableHead>
              <TableHead className="w-[180px] text-right">Tanggal</TableHead>
              <TableHead className="w-[50px] text-center">Aksi</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {messages.map((message) => (
              <TableRow key={message.id}>
                <TableCell className="font-medium">{message.name}</TableCell>
                <TableCell className="max-w-sm truncate">{message.message}</TableCell>
                <TableCell className="text-right text-sm">
                  {new Date(message.createdAt).toLocaleDateString('id-ID', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </TableCell>
                <TableCell className="text-center">
                  <Link href={`/messages/${message.id}`} passHref>
                    <Eye className="h-5 w-5 text-gray-600 hover:text-purple-600" />
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
       {messages.length === 0 && (
        <p className="text-center text-gray-500 mt-4">Belum ada pesan yang diterima.</p>
      )}
    </div>
  )
}
