import { useState } from "react"
import Logo from "./assets/Logo.svg"

function App() {

  const mudarSessaoAtiva = (botao: any) => {
    console.log(botao)
  }

  return (
    <div className="min-h-screen max-w-screen">
      {/* Sidebar */}
      <div className="w-[230px] h-screen bg-[#262626] shadow-md py-5 px-8 flex items-center justify-start gap-10 flex-col">
        <div className="h-[50px] w-[50px]">
          <img src={Logo} alt="" className="h-full w-full" />
        </div>
        <ul className="flex gap-4 flex-col links">
          <li className="selecionado" onClick={mudarSessaoAtiva}>Apresentação</li>
          <li onClick={mudarSessaoAtiva}>Tecnologias</li>
          <li onClick={mudarSessaoAtiva}>Experiências</li>
          <li onClick={mudarSessaoAtiva}>Projetos</li>
          <li onClick={mudarSessaoAtiva}>Contato</li>
        </ul>
      </div>
      {/* Sidebar */}
    </div>
  )
}

export default App
