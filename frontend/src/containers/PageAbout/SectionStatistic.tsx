import React, { FC } from "react";
import Heading from "components/Heading/Heading";

export interface Statistic {
  id: string;
  heading: string;
  subHeading: string;
}

const FOUNDER_DEMO: Statistic[] = [
  {
    id: "1",
    heading: "Innovation",
    subHeading:
      "We are committed to staying ahead of the curve, integrating the latest advancements in technology for the best possible results.",
  },
  {
    id: "2",
    heading: "Quality",
    subHeading: "Every scan and project is completed with attention to detail and a dedication to excellence.",
  },
  {
    id: "3",
    heading: "Collaboration",
    subHeading:
      "We work closely with our clients, transforming their goals into digital realities.",
  },
];

export interface SectionStatisticProps {
  className?: string;
}

const SectionStatistic: FC<SectionStatisticProps> = ({ className = "" }) => {
  return (
    <div className={`nc-SectionStatistic relative ${className}`}>
      <Heading
        desc=" We’re passionate about turning ideas into reality. Guided by our core values, we strive to deliver innovative, precise, and impactful solutions tailored to each client’s unique vision.

"
      >
        Core values
      </Heading>
      <div className="grid md:grid-cols-2 gap-6 lg:grid-cols-3 xl:gap-8">
        {FOUNDER_DEMO.map((item) => (
          <div
            key={item.id}
            className="p-6 bg-neutral-50 dark:bg-neutral-800 rounded-2xl dark:border-neutral-800"
          >
            <h3 className="text-2xl font-semibold leading-none text-neutral-900 md:text-3xl dark:text-neutral-200">
              {item.heading}
            </h3>
            <span className="block text-sm text-neutral-500 mt-3 sm:text-base dark:text-neutral-400">
              {item.subHeading}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionStatistic;
