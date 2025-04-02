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
        <Image src={CapaGess} alt="Logo Do GESS" className="w-full xl:mt-5  "></Image>
        <span className="px-3 py-1 bg-[rgba(250,123,43,0.75)] absolute top-4 right-4 xl:top-auto xl:right-auto xl:px-6 xl:py-3 xl:bottom-20 xl:left-12">
        <p className="text-white opacity-100 font-bold text-sm xl:text-2xl">
          Grêmio Estudantil <br /> Senac São Leopoldo
        </p>
      </span>
      </main>
      <nav className="mt-8 flex flex-col gap-6 xl:gap-8 items-center justify-center">
        <h1 className="text-2xl xl:text-3xl text-[#1E1E1E] font-semibold">Menu</h1>
        <ul className="flex flex-col gap-8 w-full px-20 relative xl:px-0 xl:grid xl:grid-cols-2 xl:gap-12">
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
