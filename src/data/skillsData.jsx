import { FaFlask, FaCogs, FaLaptopCode, FaCode } from 'react-icons/fa';

export const skillsData = [
  {
    id: "process-integration",
    title: "Process Integration",
    desc: "I optimize process windows for advanced semiconductor fabrication including HBM, TSV, and GAA FET technologies.",
    icon: <FaCogs />
  },
  {
    id: "eda-simulation",
    title: "EDA & Simulation",
    desc: "I utilize powerful EDA tools like SEMulator3D and Siemens Calibre for computational lithography, OPC, and defect modeling.",
    icon: <FaLaptopCode />
  },
  {
    id: "data-science",
    title: "Data Science",
    desc: "I employ DoE frameworks and machine learning with JMP and Python to analyze inline metrology data and assess process variability.",
    icon: <FaCode />
  },
  {
    id: "nems-nanofabrication",
    title: "NEMS & Nanofabrication",
    desc: "I have extensive experience in fabricating nanoelectromechanical systems and developing complex deep silicon etch processes.",
    icon: <FaFlask />
  }
];
