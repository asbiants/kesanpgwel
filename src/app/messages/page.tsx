import {Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { PrismaClient, Message } from '@prisma/client'; // Import Message type
import Link from 'next/link'; // Import Link untuk navigasi
import { Eye } from 'lucide-react'; // Import ikon Eye

// Inisialisasi Prisma Client di sini, atau gunakan instance dari lib/prisma
// const prisma = new PrismaClient();

async function getMessages(): Promise<Message[]> {
  // Fetch data directly in the server component
  // This is a simplified example, in a real app, consider using a separate data fetching layer or API route
  try {
    // If you have a lib/prisma.ts file, import and use that instance instead
    const prisma = new PrismaClient();
    const messages = await prisma.message.findMany({
      orderBy: {
        createdAt: 'desc',
      },
    });
    // It's better to use the API route you created above for client-side fetching
    // but for a simple server component, direct fetching is possible.
    // For client components fetching, use the /api/messages/getall route.
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
