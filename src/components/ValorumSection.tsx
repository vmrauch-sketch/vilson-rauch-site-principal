const ValorumSection = () => {
  return (
    <section className="pt-8 pb-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="w-16 h-[2px] bg-gold-500 mx-auto mb-6" />
          <h2 className="text-3xl md:text-4xl font-playfair font-bold text-navy-600 mb-4 tracking-wide">
            Soluções
          </h2>
          <p className="text-base tracking-[0.15em] uppercase text-gray-500 mb-10 font-light">
            Acesse o site de serviços do nosso time especializado
          </p>
          <div className="flex items-center justify-center max-w-4xl mx-auto">
            <a
              href="https://www.vmrauch.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative w-full sm:w-auto px-10 py-4 border border-gold-500/40 text-navy-600 rounded-none font-playfair text-lg tracking-wide text-center transition-all duration-500 hover:bg-navy-600 hover:text-gold-500 hover:border-navy-600 hover:shadow-lg"
            >
              www.vmrauch.com.br
              <span className="block w-0 h-[1px] bg-gold-500 mx-auto mt-1 transition-all duration-500 group-hover:w-full" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export { ValorumSection };
