
const Hero = () => {
  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: '#0F1F3D' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-white/20 rounded-full"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 border border-white/20 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 border border-white/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 text-center text-white relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-8">
            <div className="relative w-64 h-64 mx-auto">
              {/* Blue background circle */}
              <div className="absolute inset-0 bg-navy-500 rounded-full"></div>
              <img 
                src="/lovable-uploads/8c1233bc-8a84-4c25-856d-db026f518fa5.png" 
                alt="Vilson Rauch - Estrategista Patrimonial & Financeiro"
                className="relative w-full h-full rounded-full object-cover object-center border-4 border-white/20 shadow-2xl"
                style={{ objectPosition: 'center 20%' }}
                loading="eager"
                decoding="sync"
              />
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-6" style={{ color: '#F2F2F2' }}>
            Vilson Rauch
            <br />
            Estrategista Patrimonial <span className="font-serif italic">&</span> Financeiro
          </h1>

          {/* Impact Phrase */}
          <blockquote className="text-xl md:text-2xl font-inter italic max-w-4xl mx-auto leading-relaxed mb-8 text-white px-6 py-4 rounded-lg" style={{ backgroundColor: '#0F1F3D' }}>
            "Cuidando do presente e futuro com estratégia, excelência e valor."
          </blockquote>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2"></div>
        </div>
      </div>
    </header>
  );
};

export { Hero };
