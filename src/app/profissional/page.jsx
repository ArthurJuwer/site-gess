
// app/profissionais/page.js
import { PrismaClient } from '@prisma/client';
import CardCompany from '@/components/CardCompany';

// Instanciando o Prisma Client
const prisma = new PrismaClient();

async function getCompanies() {
  // Buscando todas as empresas no banco de dados
  return await prisma.company.findMany();
}

export default async function Profissional() {
  // Buscando os dados da tabela 'company' no banco de dados
  const company = await getCompanies();

  return (
    <div className='flex flex-col gap-5 '>
      <div className="flex flex-col gap-5 p-6 pb-0 xl:px-0">
        <div className="flex flex-col gap-2">
          <h1 className='text-2xl font-bold text-[#1E1E1E]'>Profissional</h1>
          <p className='text-[#A5A5A5] text-sm'>Acesse os livros que você irá utilizar durante o trimestre</p>
        </div>
      </div>
      <h1 className='w-full text-center bg-[#FE4E03] py-6 text-2xl text-white font-semibold xl:rounded-2xl'>Empresas da Tecnosinos</h1>
      <div className="grid grid-cols-1 gap-5 px-6 xl:px-0 xl:gap-10 xl:grid-cols-2">
        {/* Renderizando o CardCompany para cada empresa */}
        {company.map((company) => (
          <CardCompany key={company.id} company={company} />
        ))}
      </div>
    </div>
  );
}
