interface Props {
  foto: string;
  nome: string;
  resumo: string;
}

export function CardProfissional({ foto, nome, resumo }: Props) {
  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col items-center max-w-sm text-center">
      
      <img
        src={foto}
        alt={nome}
        className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-[#EEC9D2]"
      />

      <h3 className="text-2xl font-semibold text-[#C58BAA] font-serif mb-2">
        {nome}
      </h3>

      <p className="text-base md:text-lg text-gray-600 leading-relaxed">
        {resumo}
      </p>
    </div>
  );
}










