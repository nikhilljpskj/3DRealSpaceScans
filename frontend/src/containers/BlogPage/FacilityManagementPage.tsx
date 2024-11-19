import React from 'react';
import NcImage from "shared/NcImage/NcImage"; // Import the NcImage component

const FacilityManagementPage: React.FC = () => {
  return (
    <div className="facility-management-page space-y-16 p-8 lg:p-16 bg-gray-50 dark:bg-gray-900 text-neutral-900 dark:text-neutral-100">
      <header className="hero-section text-center space-y-4">
        <h1 className="text-3xl md:text-5xl font-semibold">Facility Management 3D Laser Scanning</h1>
        <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400">
          Capture Precise and Comprehensive As-Built Spatial Data of Your Facility
        </p>
      </header>

      {/* Image placeholder section */}
      <NcImage
        className="w-full rounded-xl"
        containerClassName="container my-10 sm:my-12"
        src="/assets/services/facility-management-scanning.jpg" // Replace with your image path
        alt="Facility Management 3D Laser Scanning"
      />

      <section className="intro-section space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Unlock Operational Efficiency with 3D Laser Scanning</h2>
        <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300">
          Incorporating 3D Laser Scanning into your facility management offers a multitude of advantages that can significantly enhance the efficiency of your daily operations. From cost reductions to more robust maintenance protocols, this technology ensures your facilities are managed effectively and proactively.
        </p>
      </section>

      <section className="benefits-section space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Our Benefits</h2>
        <ul className="list-disc pl-5 space-y-2 text-base md:text-lg text-neutral-700 dark:text-neutral-300">
          <li><strong>Improved Decision-Making:</strong> Gain detailed insights into your facility’s infrastructure, aiding in strategic planning and management.</li>
          <li><strong>Safety & Reduced Accidents:</strong> Enhance workplace safety by identifying potential hazards and improving spatial awareness, leading to fewer accidents.</li>
          <li><strong>Cost Savings:</strong> Minimize operational costs by streamlining processes, enabling early detection of potential issues, and optimizing maintenance schedules.</li>
        </ul>
        <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300">
          Contact us today for a consultation and find out how we can bring the accuracy and cost-saving benefits of 3D laser scanning to your project.
        </p>
      </section>

      <section className="3d-scanning-in-action space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">3D Laser Scanning in Action</h2>
        <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300">
          Discover how 3D laser scanning technology is revolutionizing facility management by providing accurate, real-time data to streamline your operations.
        </p>
      </section>

      <section className="why-choose-us space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Why Choose 3DRealspace Scans for 3D Laser Scanning of Your Facility?</h2>
        <ul className="list-disc pl-5 space-y-2 text-base md:text-lg text-neutral-700 dark:text-neutral-300">
          <li><strong>Unmatched Precision:</strong> Our technology captures millions of data points with accuracy down to 1mm, ensuring meticulous digital representations of your facilities.</li>
          <li><strong>Quality First:</strong> Our expert scanning and modeling team ensures that your project requirements are met with multiple quality checks throughout the process.</li>
          <li><strong>Strategic Advantage:</strong> Leverage detailed insights to enhance operational strategies, optimize processes, and reduce costs.</li>
        </ul>
      </section>

      <section className="deliverables-section space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Common Deliverables for Facility Management Laser Scanning Projects</h2>
        <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300">
          We create as-built 3D models at any level of detail (LOD) you require. Our models can cover your entire facility or specific areas based on your needs and budget. We utilize a large team of CAD modelers to ensure the highest quality Revit models, and employ rigorous QA/QC throughout the process to deliver accurate, high-quality results.
        </p>
      </section>

      <section className="bim-section space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">The Advantages of BIM for Facility Management</h2>
        <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300">
          Building Information Modeling (BIM) integrates precise spatial data with detailed building information. With 3D laser scanning and BIM, facility managers can assess asset conditions, plan renovations, optimize layouts, and monitor facility performance in real time. This integration enables better forecasting of maintenance needs and more efficient operations, reducing errors and improving decision-making.
        </p>
      </section>

      <section className="digital-twins-section space-y-4">
        <h2 className="text-2xl md:text-3xl font-semibold">Advanced Facility Management Using Digital Twins</h2>
        <p className="text-base md:text-lg text-neutral-700 dark:text-neutral-300">
          A digital twin is a virtual replica of your facility that offers real-time insights into your building’s systems and processes. It enables predictive maintenance, reduces downtime, and enhances resource management and energy efficiency, ensuring your facility operates at peak performance.
        </p>
      </section>
    </div>
  );
};

export default FacilityManagementPage;
