type Props = {
  titulo: string;
  subtitulo?: string;
  texto: string;
  destaque?: boolean; 
};

export function CardApresentacao({
  titulo,
  subtitulo,
  texto,
  destaque = false,
}: Props) {
  return (
    <div className="bg-[#F8F1EC] p-10 rounded-xl shadow-md w-full max-w-5xl text-center mb-10">

      <h2
        className={`${
          destaque ? "text-4xl md:text-5xl" : "text-2xl md:text-3xl"
        } font-bold text-[#C58BAA] font-serif mb-4`}
      >
        {titulo}
      </h2>

      {subtitulo && (
        <h3 className="text-lg md:text-xl font-medium mb-4 text-gray-800">
          {subtitulo}
        </h3>
      )}

   
      <p className="text-base md:text-lg text-gray-700 leading-relaxed">
        {texto}
      </p>
    </div>
  );
}
