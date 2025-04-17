import { CardApresentacao } from "../../cardproduto/CardApresentacao";
import { CardRecurso } from "../../cardproduto/CardRecurso";
import { CarrosselAcoes } from "../../carrosselação/Carrossel";

function Produto() {
  return (
    <section
      id="produto"
      className="py-32 px-6 bg-white text-center flex flex-col items-center justify-center"
    >
 {/* Apresentação */}
 <CardApresentacao
        titulo="Conheça Devas RH"
        subtitulo="A Solução Inteligente para Profissionalizar sua Gestão de Pessoas"
        texto="Imagine ter o controle total do seu time na palma da mão. Com o Devas RH, você otimiza processos, reduz erros e ganha tempo — tudo com a simplicidade que sua equipe merece e a eficiência que sua empresa precisa."
        destaque
      />

      {/* Por que escolher */}
      <CardApresentacao
        titulo="Por que escolher o Devas RH?"
        texto="Sua equipe de RH merece mais do que planilhas e processos manuais. O Devas RH foi criado para transformar a forma como você gerencia seus colaboradores, oferecendo uma plataforma robusta, segura e intuitiva. Desenvolvido com foco nas principais demandas do setor de Recursos Humanos, ele centraliza os dados dos funcionários e simplifica todas as ações do dia a dia."
      />

      {/* Recursos */}
      <section className="w-full bg-[#F8F1EC] py-32 px-4">
        <h3 className="text-3xl text-[#C58BAA] font-serif font-semibold text-center mb-12">
          Recursos que entregam resultado
        </h3>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <CardRecurso
            titulo="Cadastro rápido"
            descricao="Faça o cadastro completo de colaboradores em poucos cliques."
          />
          <CardRecurso
            titulo="Busca inteligente"
            descricao="Encontre funcionários por nome, CPF ou ID com facilidade."
          />
          <CardRecurso
            titulo="Atualização ágil"
            descricao="Edite informações em tempo real com interface intuitiva."
          />
          <CardRecurso
            titulo="Exclusão segura"
            descricao="Remova registros com segurança e controle de histórico."
          />
          <CardRecurso
            titulo="Visualização clara"
            descricao="Veja admissões, histórico e dados organizados de forma prática."
          />
          <CardRecurso
            titulo="Interface moderna"
            descricao="Um sistema bonito, fácil de usar e feito com foco no usuário."
          />
        </div>
      </section>

    
      <CarrosselAcoes />

     
      </section>

      
      

    
    
  );
}

export default Produto;