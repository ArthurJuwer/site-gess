import Image from "next/image";
import CapaGess from "../../public/Capa-Home.svg";
import ItemMenu from "@/components/ItemMenu";
import { useItems } from "@/hooks/useItensMenu";
import Link from "next/link";

export default function Home() {
  const items = useItems()
  return (
    <div className="">
      <main className="relative w-full">
        <Image src={CapaGess} alt="Logo Do GESS" className="w-full"></Image>
        <span className="px-4 py-2 bg-[rgba(250,123,43,0.75)] absolute bottom-14 left-5">
        <p className="text-white opacity-100 font-bold text-[22px]">
          Grêmio Estudantil <br /> Senac São Leopoldo
        </p>
      </span>
      </main>
      <nav className="mt-8 flex flex-col gap-6 items-center justify-center">
        <h1 className="text-2xl text-[#1E1E1E] font-semibold">Menu</h1>
        <ul className="flex flex-col gap-8 w-full px-20 relative">
        {items.map((item, index) => (
            <Link href={item.href || ''} key={index}>
              <ItemMenu icone={item.icone} texto={item.texto} index={index} cor={'#FA7B2B'}/>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
}
