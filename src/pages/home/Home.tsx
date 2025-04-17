
import Contato from "../../components/sections/contato/Contato";
import Equipe from "../../components/sections/equipe/Equipe";
import Inicio from "../../components/sections/inicio/Inicio";
import Produto from "../../components/sections/produto/Produto";

function Home() {
  return (
    <main className="bg-[#F8F1EC] text-gray-800 font-serif">
      <Inicio />
      <Produto />
      <Equipe />
      <Contato />
    </main>
  );
}

export default Home;
