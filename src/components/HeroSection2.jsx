const HeroSection = () => (
  <section className="relative bg-[#def1ef] text-center pt-32 pb-24 lg:pt-40 lg:pb-32">
    {/* No mt-16 needed anymore! Navbar is fixed on top */}
    
    <div className="max-w-3xl mx-auto px-6">
      <h2 className="text-4xl md:text-6xl font-bold text-[#31587C] mb-6 leading-tight">
        About Us
      </h2>
      <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto leading-relaxed">
        We are a leading SaaS App Company providing innovative, reliable, and
        user-friendly software solutions for businesses of all sizes.
      </p>
    </div>
  </section>
);

export default HeroSection;