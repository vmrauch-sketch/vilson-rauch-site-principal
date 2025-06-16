
const NavigationButtons = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-8">
          <p className="text-lg text-gray-700 max-w-4xl mx-auto">
            Personalizado, independente e orientado à construção e preservação do patrimônio.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center max-w-4xl mx-auto">
          <button 
            onClick={() => scrollToSection('pessoa-fisica')}
            className="bg-navy-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-navy-700 transition-all duration-300 shadow-lg w-full md:w-auto"
          >
            Pessoa Física
          </button>
          
          <button 
            onClick={() => scrollToSection('protocolo-especializado')}
            className="bg-blue-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-blue-700 transition-all duration-300 shadow-lg w-full md:w-auto"
          >
            Profissionais da Medicina e Saúde
          </button>
          
          <button 
            onClick={() => scrollToSection('pessoa-juridica')}
            className="bg-green-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-green-700 transition-all duration-300 shadow-lg w-full md:w-auto"
          >
            Pessoa Jurídica
          </button>
        </div>
      </div>
    </section>
  );
};

export { NavigationButtons };
