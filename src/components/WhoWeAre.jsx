import React from "react";

const WhoWeAre = () => (
  <section className="max-w-6xl mx-auto px-6 py-16 flex flex-col items-center text-center">
    {/* Text Section */}
    <div className="mb-10">
      <h3 className="text-3xl font-bold text-[#31587C] mb-4">Who We Are</h3>
      <p className="text-[#31587C] mb-6">
        We are a leading SaaS App Company dedicated to providing innovative, reliable, 
        and easy-to-use software solutions for businesses of all sizes.
      </p>
    </div>

    {/* Image Section */}
    <img
      src="https://websitedemos.net/saas-app-company-04/wp-content/uploads/sites/1180/2023/02/about-01.jpg"
      alt="Team collaboration"
      className="rounded-xl shadow-lg max-w-full h-auto"
    />
  </section>
);

export default WhoWeAre;
