import React from "react";

const IndustryAndGeographicExpertise = () => {
  return (
    <section className="py-2 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-2">
          Industry and Geographic Expertise
        </h2>
        <p className="text-lg text-gray-600 mb-2">
          With a proven track record across diverse industries, we understand the unique needs and challenges of sectors such as Real Estate, Construction, Hospitality, and Retail. Our services extend throughout California, Nevada and Oregon, ensuring our advanced scanning technology is accessible where it’s needed most.
        </p>
        
        <div className="">
          <h3 className="text-2xl font-semibold text-gray-800">
            Service Regions
          </h3>
          <ul className="list-disc pl-6 text-gray-600">
            <li>California</li>
            <li>Nevada</li>
            <li>Oregon</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default IndustryAndGeographicExpertise;
