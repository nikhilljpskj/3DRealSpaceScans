import React from 'react';
import NcImage from "shared/NcImage/NcImage"; // Import the NcImage component

const ScanToBIMPage: React.FC = () => {
  return (
    <div className="scan-to-bim-page space-y-16 p-8 lg:p-16 bg-gray-50 dark:bg-gray-900 text-neutral-900 dark:text-neutral-100">
      <header className="hero-section text-center space-y-4">
        <h1 className="text-3xl md:text-5xl font-semibold">Scan to BIM</h1>
        <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400">
          Get Usable 3D Revit Models that Save Time, Reduce Design Clashes, and Increase Quality
        </p>
      </header>

      {/* Image placeholder section */}
      <NcImage
        className="w-full rounded-xl"
        containerClassName="container my-10 sm:my-12"
        src="/assets/services/scan-to-bim-placeholder.jpg"  // Replace with your image path
        alt="Scan to BIM"
      />

      <section className="intro-section space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Quickly Receive 3D Revit Models Created From Laser Scans</h2>
        <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300">
          Our Scan to BIM service captures existing structures at any stage of a project and provides as-built 3D models in formats like Autodesk Revit or standard CAD formats. This service is an essential upgrade for architects, engineers, and contractors accustomed to traditional as-built data collection.
        </p>
      </section>

      <section className="process-section space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">How Does Scan-to-BIM Work?</h2>
        <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300">
          The process starts with field deployment of a 3D laser scanner to capture the existing structure. This high-tech instrument collects a massive number of point clouds rapidly, resulting in a highly accurate 3D representation of the building. Our team then converts this data into a detailed BIM model.
        </p>
      </section>

      <section className="applications-section space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Applications of Scan to BIM</h2>
        <ul className="list-disc pl-5 space-y-2 text-base md:text-lg text-neutral-700 dark:text-neutral-300">
          <li>Pre-project Estimating</li>
          <li>Designing Around Existing Features</li>
          <li>Engineering and Coordination</li>
          <li>Construction Monitoring</li>
          <li>As-built Verification</li>
          <li>Facility Management</li>
        </ul>
      </section>

      <section className="accuracy-section space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">High Precision and Accuracy</h2>
        <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300">
          Our high-end laser scanners capture everything within view, ensuring exceptional accuracy up to 1/8" over 100 ft. This level of precision means the scans reveal true conditions, even slight imperfections. However, our modeling team ensures that the final BIM model reflects the design intent while avoiding excessive detail.
        </p>
      </section>

      <section className="what-can-be-scanned-section space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">What Can Be Scanned?</h2>
        <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300">
          Virtually any structure can be captured, from small rooms to large, complex facilities. This allows project teams to measure and document existing spaces quickly and accurately, making Scan to BIM superior to traditional methods.
        </p>
      </section>

      <section className="advantages-section space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Advantages of Scan to BIM</h2>
        <ul className="list-disc pl-5 space-y-2 text-base md:text-lg text-neutral-700 dark:text-neutral-300">
          <li>Automated measurement and documentation</li>
          <li>Highly accurate as-built models, reducing design errors</li>
          <li>Enhanced coordination among stakeholders</li>
        </ul>
        <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300">
          Compared to traditional methods like using tape measures or laser beams for single measurements, Scan to BIM provides unparalleled speed and accuracy.
        </p>
      </section>

      <section className="conclusion-section space-y-4 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold">Request a Quote</h2>
        <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300">
          Reach out to us to find out how our Scan to BIM services can support your project and streamline your design and construction processes.
        </p>
      </section>
    </div>
  );
};

export default ScanToBIMPage;
