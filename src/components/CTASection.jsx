import React from "react";

const CTASection = () => (
  <section className="relative m-16 rounded-3xl bg-[#259ca4] text-white py-24 px-6 text-center overflow-hidden-mb-24">
    {/* Background blur circles
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute top-10 left-10 w-80 h-80 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
    </div> */}

    {/* Content */}
    <div className="relative z-10 max-w-3xl mx-auto">
      <h2 className="text-3xl md:text-2xl font-semibold mb-6 leading-tight">
        Ready to Take Your Business to the Next Level?
      </h2>

      <p className="text-indigo-100 text-lg md:text-xl mb-10">
        Request a demo of any of our products today and see how they can
        transform your business, streamline operations, and increase revenue.
      </p>

      <button className="bg-orange-400 text-white text-lg font-semibold px-10 py-4 
      rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300 
      hover:bg-white hover:text-black">
        GET STARTED TODAY
      </button>
    </div>
  </section>
);

export default CTASection;
