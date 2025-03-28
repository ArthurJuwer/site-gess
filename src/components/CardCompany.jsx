import { LinkedinIcon, Facebook, YoutubeIcon, ExternalLink } from "lucide-react";
import Image from "next/image";

export default function CardCompany ({ company }){
  return (
    <div className="bg-[#EDEBEB] shadow-2xl rounded-3xl p-5 flex flex-col gap-4">
      <Image src={company.imageSrc} alt={company.name} />
      <span className="h-0.5 w-full block bg-[#A5A5A5] rounded-2xl"></span>
      
      <div className="flex flex-col gap-2">
        <div className="text-[#FE4E03] flex justify-between items-center">
          <h2 className="font-semibold">{company.name}</h2>
          <h3 className="text-xs">{company.website}</h3>
        </div>
        <ul className="flex flex-col gap-1 text-sm">
          {company.contact.map((info, index) => (
            <li key={index}>{info}</li>
          ))}
        </ul>
      </div>
      
      <div className="flex gap-2 flex-wrap">
        {company.tags.map((tag, index) => (
          <span key={index} className="bg-[#FE4E03] p-2 px-6 text-white rounded-2xl text-xs">
            {tag}
          </span>
        ))}
      </div>
      
      <div className="flex justify-between mt-1">
        <div className="flex gap-1 text-[#FE4E03]">
          <LinkedinIcon className="size-7" />
          <Facebook className="size-7" />
          <YoutubeIcon className="size-7" />
        </div>
        <ExternalLink className="text-[#FE4E03] size-7" />
      </div>
    </div>
  );
};

