import { CardProfissional } from "../../cardprofissional/CardProfissional";


function Equipe() {
    return (
      <section id="equipe" className="py-32 px-6 bg-[#F8F1EC] text-center">
        <h2 className="text-3xl font-semibold text-[#C58BAA] mb-4 font-serif">Nossa Equipe</h2>
        <div className="max-w-6xl mx-auto mb-16 px-4">
        <p className="text-lg text-gray-700 leading-relaxed text-justify">
          Somos um time de desenvolvedoras Full Stack Java, formadas pelo bootcamp intensivo da Generation Brasil.
          Vinda de diferentes trajetórias, cada uma de nós carrega histórias únicas, habilidades complementares e
          uma paixão em comum: transformar o mundo através da tecnologia. Com domínio em ferramentas como Java,
          Spring Boot, React, MySQL, metodologias ágeis e boas práticas de desenvolvimento, atuamos em projetos
          práticos que nos prepararam para os desafios do mercado.
        </p>
        <h2 className="mt-9 text-lg text-[#C58BAA] leading-relaxed text-center">
          Nosso diferencial? A união entre técnica, criatividade e muita vontade de evoluir.
        </h2>
      </div>


            <div className="grid md:grid-cols-3  gap-10 max-w-6x1 mx-auto container">
                <CardProfissional
                foto="https://avatars.githubusercontent.com/u/183421243?v=4"
                  nome = "Juliana Assi"
                  resumo =  "Formada em Big Data e Analytics, Juliana combina sua formação analítica com o olharde desenvolvedora Full Stack. Atualmente cursa Análise e Desenvolvimento de
 Sistemas e se destaca pela capacidade de transformar dados e lógica em experiências
digitais completas. No bootcamp da Generation, mergulhou em tecnologias como Spring
Boot e React, trabalhando em equipe com agilidade e excelência. Sempre dedicada,
está em constante busca por inovação"
                  />
           
                <CardProfissional
                foto= "https://github.com/daniele-silveira.png"
                  nome = " Daniele Silveira"
              resumo =  "Com mais de 20 anos de experiência em tecnologia, Daniele fez uma transição
                        inspiradora da infraestrutura para o desenvolvimento de software. Atuou em empresas
                            de grande porte como parceira da HP e hoje canaliza sua paixão por código em soluções
                            robustas com Java, Spring Boot e React. Além do domínio técnico, traz para os projetos
                            habilidades interpessoais sólidas, desenvolvidas ao longo de uma carreira marcada por
                            resiliência, adaptabilidade e visão estratégica"
                  />
                  <CardProfissional
                foto= "https://github.com/VictoriaBorges.png"
                  nome = " Victoria Borges"
                 resumo =" Desenvolvedora full stack, formada em Análise e Desenvolvimento de
                  Sistemas. Apaixonada por tecnologia e por atividade física, encontra equilíbrio entre
                  lógica e movimento. Tem uma mente curiosa, espírito colaborativo e determinação de
                  sobra para encarar novos desafios. Está sempre em busca de evoluir como profissional
                  e entregar soluções com propósito e qualidade."

                  />
                    <CardProfissional
                foto= "https://avatars.githubusercontent.com/u/111655379?v=4"
                  nome = " Maria Gabriela"
                  resumo =  "Com foco em desenvolvimento backend, Maria está concluindo a graduação em  Tecnologia da Informação e já carrega uma bagagem sólida em projetos full stack.  Participou do bootcamp da Generation Brasil, onde se destacou em soluções com Java,  Spring e React. Determinada e detalhista, une pensamento lógico a uma grande  capacidade de trabalho em equipe, sempre em busca de escrever códigos que  realmente resolvam problemas."

                  />
                <CardProfissional
                foto= "https://avatars.githubusercontent.com/u/194613682?v=4"
                  nome = " Sâmia  França"
                  resumo =  "Estudante de Engenharia da Computação, Sâmia iniciou sua jornada em outra área,  mas encontrou na tecnologia sua verdadeira vocação. Com experiência em marketing  digital e habilidades com inglês e espanhol, traz uma visão ampla e interdisciplinar para  o desenvolvimento de software. No bootcamp da Generation, aplicou seus  conhecimentos em projetos com Java, Spring Boot e React, sempre com foco em  inovação e usabilidade. Atualmente, aprofunda-se em Python e análise de dados,  buscando unir criatividade, técnica e impacto."

                  />
               <CardProfissional
                foto= 'https://avatars.githubusercontent.com/u/151661437?v=4'
                  nome = " Rayanne Dias"
                  resumo =  "Apaixonada por resolver problemas com tecnologia, Rayanne é formada em Gestão da  Tecnologia da Informação e Desenvolvimento de Sistemas. Atua como desenvolvedora  full stack, unindo raciocínio lógico, adaptabilidade e aprendizado contínuo em tudo o  que faz. Seu compromisso com a evolução constante e a paixão por entregar valor  tornam cada projeto uma oportunidade de crescimento e impacto real."

                  />

            </div>







      </section>
    );
  }
  
  export default Equipe;
  