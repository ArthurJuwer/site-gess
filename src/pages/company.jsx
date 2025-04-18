// pages/pessoas.jsx
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default function Company({ company }) {
  return (
    <div>
      <h1>Lista de Pessoas</h1>
      <ul>
        {company.map((company) => (
          <li key={company.id}>
            {company.name} - {company.website} - {company.contact}
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const company = await prisma.company.findMany();
  return {
    props: {
        company,
    },
  };
}
