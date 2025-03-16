import Image from "next/image";
import CapaGess from "../../public/Capa-Home.svg";
import ItemMenu from "@/components/ItemMenu";
import { useItems } from "@/hooks/useItensMenu";

export default function Home() {
  const items = useItems()
  return (
    <div className="">
      <main>
        <Image src={CapaGess} alt="Logo Do GESS" className="w-full"></Image>
      </main>
      <nav className="mt-8 flex flex-col gap-6 items-center justify-center">
        <h1 className="text-2xl text-[#1E1E1E] font-semibold">Menu</h1>
        <ul className="flex flex-col gap-8 w-full px-20 relative">
        {items.map((item, index) => (
            <li key={index}>
              <ItemMenu icone={item.icone} texto={item.texto} index={index} cor={'#FA7B2B'}/>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
