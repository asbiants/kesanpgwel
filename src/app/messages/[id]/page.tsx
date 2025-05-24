import { notFound } from 'next/navigation';
import { PrismaClient } from '@prisma/client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from 'next/link';

const prisma = new PrismaClient();

export default async function MessageDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const messageId = (await params).id;

  const message = await prisma.message.findUnique({
    where: {
      id: parseInt(messageId),
    },
  });

  if (!message) {
    notFound();
  }

  return (
    <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-2xl mx-auto shadow-lg">
        <CardHeader>
          <CardTitle className="text-center text-2xl">{message.name}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <p className="text-sm font-medium text-gray-700 mb-2">Pesan:</p>
            <p className="text-gray-800 leading-relaxed">{message.message}</p>
          </div>
          <div className="text-right">
            <Badge variant="secondary">
              {new Date(message.createdAt).toLocaleDateString('id-ID', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
              })}
            </Badge>
          </div>
        </CardContent>
      </Card>

      <div className="mt-8 text-center">
        <Link href="/messages" className="text-purple-600 hover:underline">
          &larr; Kembali ke Daftar Pesan
        </Link>
      </div>
    </div>
  );
}
