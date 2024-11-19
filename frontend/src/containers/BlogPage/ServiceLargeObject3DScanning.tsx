import React from 'react';
import NcImage from "shared/NcImage/NcImage"; // Import the NcImage component

const LargeObject3DScanningPage: React.FC = () => {
  return (
    <div className="large-object-3d-scanning-page space-y-16 p-8 lg:p-16 bg-gray-50 dark:bg-gray-900 text-neutral-900 dark:text-neutral-100">
      <header className="hero-section text-center space-y-4">
        <h1 className="text-3xl md:text-5xl font-semibold">Large Object 3D Scanning</h1>
        <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400">
          Precision 3D Scanning for Machines, Vehicles, Sculptures, and More
        </p>
      </header>

      {/* Image placeholder section */}
      <NcImage
        className="w-full rounded-xl"
        containerClassName="container my-10 sm:my-12"
        src="/assets/services/large-object-scanning.jpg" // Replace with your image path
        alt="Large Object 3D Scanning"
      />

      <section className="intro-section space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Unlock the Power of Large Object 3D Scanning</h2>
        <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300">
          Whether it's machinery, vehicles, or large sculptures, 3D scanning provides an accurate, digital representation of your object. With our advanced scanning technology, we can scan large objects on-site, capturing all the details and ensuring precision down to the millimeter. 
        </p>
      </section>

      <section className="benefits-section space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Benefits of Large Object 3D Scanning</h2>
        <ul className="list-disc pl-5 space-y-2 text-base md:text-lg text-neutral-700 dark:text-neutral-300">
          <li><strong>Accurate Representations:</strong> Get precise 3D models of large objects for further analysis, modeling, or fabrication.</li>
          <li><strong>Reverse Engineering:</strong> Re-create or modify legacy parts, molds, or components with digital models.</li>
          <li><strong>Streamlined Workflow:</strong> Save time and reduce errors by capturing detailed measurements quickly, making the design or restoration process more efficient.</li>
        </ul>
        <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300">
          Contact us today for a consultation and learn how 3D scanning can improve your project’s accuracy and reduce costs.
        </p>
      </section>

      <section className="3d-scanning-in-action space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">How 3D Scanning Works for Large Objects</h2>
        <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300">
          Our tripod-mounted 3D scanners are designed to capture large objects with high precision where they stand. Whether it's a car, an airplane, or even a large sculpture, our scanners gather millions of data points, providing a true-to-life digital representation for design, analysis, and more.
        </p>
      </section>

      <section className="why-choose-us space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Why Choose 3DRealSpace Scans for Your Large Object Scanning Needs?</h2>
        <ul className="list-disc pl-5 space-y-2 text-base md:text-lg text-neutral-700 dark:text-neutral-300">
          <li><strong>On-Site Scanning:</strong> No need for disassembly. We can scan your objects exactly where they sit, saving you time and effort.</li>
          <li><strong>High-Precision Models:</strong> Our technology delivers high-precision scans with accuracy up to 1mm for a wide range of applications.</li>
          <li><strong>Versatile Applications:</strong> Whether you need scans for manufacturing, reverse engineering, or artistic projects, our services cover it all.</li>
        </ul>
      </section>

      <section className="deliverables-section space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Deliverables for Large Object Scanning Projects</h2>
        <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300">
          We deliver high-quality 3D models in fabrication-friendly formats such as STP, SolidWorks, and more. Whether you need the complete object scanned or just specific details, our team ensures your project’s needs are met with precision and efficiency.
        </p>
      </section>

      <section className="accuracy-section space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">How Accurate Are the Scans?</h2>
        <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300">
          Our 3D scanners offer up to 1mm accuracy, which is ideal for reverse engineering, art restoration, and precise manufacturing tasks. Depending on the size and complexity of the object, we can adjust the scanning method to meet your exact requirements.
        </p>
      </section>

      <section className="applications-section space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Applications of Large Object 3D Scanning</h2>
        <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300">
          Our 3D scanning services are ideal for a wide range of industries, including:
        </p>
        <ul className="list-disc pl-5 space-y-2 text-base md:text-lg text-neutral-700 dark:text-neutral-300">
          <li>Aircrafts and Aviation Components</li>
          <li>Cars, Trucks, and Vehicles</li>
          <li>Sculptures and Artworks</li>
          <li>Industrial Machinery</li>
          <li>Wind Turbines and Large Structures</li>
        </ul>
      </section>
    </div>
  );
};

export default LargeObject3DScanningPage;
