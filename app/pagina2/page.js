import Cabecalho2 from "../_components2/cabecalho2";
import Calendario from "../_components2/calendario";

export default function Contratar() {
    return (
      <div className="flex flex-col items-center justify-center p-2 sm:p-5">
            <div className="w-full max-w-screen-xl mx-auto shadow-2xl rounded-xl flex flex-col mb-10 ">
                <Cabecalho2 />
                <Calendario />
            </div>
          </div>
    );
  }