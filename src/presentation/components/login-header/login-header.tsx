import React, {memo} from "react";
import imagem from "../../../imagens/4d.png"

const LoginHeader: React.FC = () => {
  return(
    <header className="bg-rose-900 flex flex-col items-center py-8">
        <img className="size-48 mb-4" src={imagem} alt="Logo 4Dev" />
        <h1 className="font-semibold text-white text-center">
          4Dev - Enquetes para Programadores
        </h1>
      </header>
  )
}

export default memo (LoginHeader);