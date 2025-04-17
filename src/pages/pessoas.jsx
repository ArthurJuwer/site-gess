// pages/pessoas.jsx
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default function Pessoas({ pessoas }) {
  return (
    <div>
      <h1>Lista de Pessoas</h1>
      <ul>
        {pessoas.map((pessoa) => (
          <li key={pessoa.id}>
            {pessoa.nome} - {pessoa.idade} anos - {pessoa.email}
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getServerSideProps() {
  const pessoas = await prisma.pessoa.findMany();
  return {
    props: {
      pessoas,
    },
  };
}
