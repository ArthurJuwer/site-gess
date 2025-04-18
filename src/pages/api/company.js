import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, website, contact, tags, imageSrc } = req.body;
    try {
      const company = await prisma.company.create({
        data: {
          name,
          website,
          contact,
          tags,
          imageSrc
        },
      });
      res.status(201).json(company);
    } catch (error) {
      res.status(500).json({ error: 'Erro ao criar a empresa' });
    }
  } else {
    res.status(405).json({ error: 'Método não permitido' });
  }
}

// model Company {
//     id      Int    @id @default(autoincrement())
//     name    String
//     website   String
//     contact   String 
//     tags   String
//     imageSrc  String
//   }