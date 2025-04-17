type Props = {
  titulo: string;
  descricao: string;
};

export function CardRecurso({ titulo, descricao }: Props) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md text-left transition duration-300 hover:shadow-lg">
      <h4 className="text-xl md:text-2xl font-semibold text-[#C58BAA] mb-2">
        {titulo}
      </h4>
      <p className="text-gray-700 text-base md:text-lg leading-relaxed">
        {descricao}
      </p>
    </div>
  );
}
