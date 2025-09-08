"use client"
import Cabecalho from "./_components/cabecalho";
import Apresentacao from "./_components/apresentacao";
import { Marco } from "./_components/marco";
import Bio from "./_components/bio";
import { Relatos } from "./_components/relatos";
import { Remember } from "./_components/remember";
import  Dinamica  from "./_components/dinamica";
import Rodape from "./_components/rodape"


export default function Home() {
  return (
    
      <div className="w-full flex flex-col">
          <Cabecalho />
          <Apresentacao />
          <Marco />
          <Bio  />
          <Dinamica />
          <Relatos />
          <Remember />
          <Rodape  />
      </div>
    
  );
}