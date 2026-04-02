const Hero = () => {
  return (
    <header className="relative min-h-screen flex items-center justify-center overflow-hidden" style={{ background: 'linear-gradient(180deg, #0a1628 0%, #0F1F3D 50%, #142a4f 100%)' }}>
      {/* Subtle decorative lines */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-500/10 to-transparent" />
        <div className="absolute top-3/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gold-500/10 to-transparent" />
      </div>

      <div className="container mx-auto px-6 text-center text-white relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Gold accent line */}
          <div className="w-16 h-[2px] bg-gold-500 mx-auto mb-10" />

          {/* Profile Image */}
          <div className="mb-10">
            <div className="relative w-56 h-56 md:w-64 md:h-64 mx-auto">
              <div className="absolute -inset-1 rounded-full border border-gold-500/20" />
              <img 
                src="/lovable-uploads/8c1233bc-8a84-4c25-856d-db026f518fa5.png" 
                alt="Vilson Rauch - Estrategista Financeiro e Patrimonial"
                className="relative w-full h-full rounded-full object-cover object-center shadow-2xl"
                style={{ objectPosition: 'center 20%', boxShadow: '0 0 60px rgba(191, 155, 81, 0.15)' }}
                loading="eager"
                decoding="sync"
              />
            </div>
          </div>

          {/* Main Title */}
          <h1 className="text-5xl md:text-7xl font-playfair font-bold mb-8 tracking-wide" style={{ color: '#d4af5a' }}>
            Vilson Rauch
          </h1>

          {/* Subtitle */}
          <p className="text-sm md:text-base tracking-[0.25em] uppercase text-gray-300 font-light mb-3">
            Estrategista Financeiro
          </p>
          <p className="text-sm md:text-base tracking-[0.25em] uppercase text-gray-300 font-light mb-10">
            <span className="font-playfair italic normal-case tracking-normal text-gold-500/80">&</span>{" "}
            Patrimonial
          </p>

          {/* Divider */}
          <div className="w-10 h-[1px] bg-gold-500/40 mx-auto mb-10" />

          {/* Impact Phrase */}
          <blockquote className="text-lg md:text-xl font-playfair italic max-w-3xl mx-auto leading-relaxed text-gray-300/90">
            "Cuidando do presente e futuro com estratégia, excelência e valor."
          </blockquote>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-5 h-8 border border-gold-500/30 rounded-full flex justify-center">
          <div className="w-[2px] h-2 bg-gold-500/50 rounded-full mt-1.5" />
        </div>
      </div>
    </header>
  );
};

export { Hero };
