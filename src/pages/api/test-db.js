// pages/api/test-db.ts
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    const result = await prisma.$queryRaw`SELECT 1 + 1 AS result`; // só pra testar conexão
    res.status(200).json({ success: true, data: result });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
}
