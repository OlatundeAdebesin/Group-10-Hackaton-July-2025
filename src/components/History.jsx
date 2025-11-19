import React from "react";

const History = () => (
  <section className="max-w-6xl mx-auto px-6 py-16 flex flex-col items-center text-center">
    {/* Text Section */}
    <div className="mb-10">
      <h3 className="text-3xl font-bold text-gray-800 mb-4">Our History</h3>
      <p className="text-gray-600 mb-6">
        Since our founding in 2010, we’ve built lasting relationships with our customers through trust, 
        respect, and innovation. Our journey reflects our commitment to excellence.
      </p>

    </div>

    {/* Image Section */}
    <img
      src="https://websitedemos.net/saas-app-company-04/wp-content/uploads/sites/1180/2023/02/about-02.jpg"
      alt="Our History"
      className="rounded-lg shadow-lg max-w-full h-auto"
    />
  </section>
);

export default History;
