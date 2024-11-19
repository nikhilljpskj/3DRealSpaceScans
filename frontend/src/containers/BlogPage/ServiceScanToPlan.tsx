import React from 'react';
import NcImage from "shared/NcImage/NcImage"; // Import the NcImage component

const ScanToPlanPage: React.FC = () => {
  return (
    <div className="scan-to-plan-page space-y-16 p-8 lg:p-16 bg-gray-50 dark:bg-gray-900 text-neutral-900 dark:text-neutral-100">
      <header className="hero-section text-center space-y-4">
        <h1 className="text-3xl md:text-5xl font-semibold">Scan to Plan - 2D CAD Drawing from As-Built Conditions
        </h1>
        <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400">
          Create Accurate 2D CAD Drawings from 3D Scans in Less Time, with Greater Precision
        </p>
      </header>

      {/* Image placeholder section */}
      <NcImage
        className="w-full rounded-xl"
        containerClassName="container my-10 sm:my-12"
        src="/assets/services/scan-to-plan-placeholder.jpg"  // Replace with your image path
        alt="Scan to Plan"
      />

      <section className="intro-section space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Quick, Accurate, and Cost-Effective Floor Plan Creation</h2>
        <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300">
          Our Scan-to-Plan service allows you to quickly create accurate 2D CAD drawings from 3D scans. Whether you're looking to design or make updates to your facility, our experienced team captures data that reduces manual labor, minimizes errors, and accelerates project timelines.
        </p>
      </section>

      <section className="process-section space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">How Does Scan-to-Plan Work?</h2>
        <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300">
          We use advanced 3D laser scanning to capture your space with incredible accuracy. In a single day, our team can scan thousands of square feet of a building. The scan data is then processed to generate 2D CAD drawings, including floor plans, elevations, and more.
        </p>
      </section>

      <section className="applications-section space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Applications of Scan to Plan</h2>
        <ul className="list-disc pl-5 space-y-2 text-base md:text-lg text-neutral-700 dark:text-neutral-300">
          <li>Pre-construction Planning</li>
          <li>Design and Renovation Projects</li>
          <li>Facility Management</li>
          <li>As-Built Documentation</li>
          <li>Site Layout and Topography Mapping</li>
        </ul>
      </section>

      <section className="accuracy-section space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Unmatched Accuracy and Efficiency</h2>
        <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300">
          Our 3D scanning technology captures data with millimeter-level accuracy, ensuring that your as-built drawings are precise. This accuracy minimizes errors during design phases and provides reliable data for any stage of your project.
        </p>
      </section>

      <section className="what-can-be-scanned-section space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">What Can Be Scanned?</h2>
        <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300">
          From office buildings to industrial plants, our Scan-to-Plan service can capture virtually any structure. The resulting drawings can be used for design, planning, and construction purposes, making it a versatile solution for various industries.
        </p>
      </section>

      <section className="advantages-section space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Key Benefits of Scan-to-Plan</h2>
        <ul className="list-disc pl-5 space-y-2 text-base md:text-lg text-neutral-700 dark:text-neutral-300">
          <li>Accurate 2D CAD drawings</li>
          <li>Faster turnaround times</li>
          <li>Cost-effective compared to traditional methods</li>
          <li>Improved collaboration between stakeholders</li>
        </ul>
        <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300">
          Traditional manual measurement methods are time-consuming and prone to error. With Scan-to-Plan, we streamline the process, providing you with high-quality results in a fraction of the time.
        </p>
      </section>

      <section className="conclusion-section space-y-4 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold">Request a Quote</h2>
        <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300">
          Contact us today to learn how Scan-to-Plan can save you time and money while delivering accurate, ready-to-use CAD drawings for your next project.
        </p>
      </section>
    </div>
  );
};

export default ScanToPlanPage;
