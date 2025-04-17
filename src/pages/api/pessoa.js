// pages/api/pessoa.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { nome, idade, email } = req.body;
    try {
      const pessoa = await prisma.pessoa.create({
        data: {
          nome,
          idade,
          email,
        },
      });
      res.status(201).json(pessoa);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar a pessoa' });
    }
  } else {
    res.status(405).json({ error: 'Método não permitido' });
  }
}

