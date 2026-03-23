import HeroImage from "/assets/hero-img.webp";

const Image = {
  HeroImage,
};

export default Image;

import Tools1 from "/assets/tools/vscode.png";
import Tools2 from "/assets/tools/reactjs.png";
import Tools3 from "/assets/tools/nextjs.png";
import Tools4 from "/assets/tools/tailwind.png";
import Tools5 from "/assets/tools/bootstrap.png";
import Tools6 from "/assets/tools/js.png";
import Tools7 from "/assets/tools/nodejs.png";
import Tools8 from "/assets/tools/github.png";
import Tools9 from "/assets/tools/ai.png";
import Tools10 from "/assets/tools/canva.png";
import Tools11 from "/assets/tools/figma.png";
import Tools12 from "/assets/tools/kotlin.png";
import Tools13 from "/assets/tools/firebase.png";
import Tools14 from "/assets/tools/html.png";
import Tools15 from "/assets/tools/css.png";
import Tools16 from "/assets/tools/ts.png";
import Tools17 from "/assets/tools/php.png";
import Tools18 from "/assets/tools/vite.png";
import Tools19 from "/assets/tools/mysql.png";


export const listTools = [
  {
    id: 1,
    gambar: Tools14,
    nama: "HTML",
    ket: "Language",
    dad: "100",
  },
  {
    id: 2,
    gambar: Tools15,
    nama: "CSS",
    ket: "Language",
    dad: "200",
  },
  {
    id: 3,
    gambar: Tools6,
    nama: "JavaScript",
    ket: "Language",
    dad: "300",
  },
  {
    id: 4,
    gambar: `${import.meta.env.BASE_URL}assets/tools/python.svg`, // TODO: add python.png to public/assets/tools/
    nama: "Python",
    ket: "Language",
    dad: "400",
  },
  {
    id: 5,
    gambar: `${import.meta.env.BASE_URL}assets/tools/c.svg`, // TODO: add c.png
    nama: "C",
    ket: "Language",
    dad: "500",
  },
  {
    id: 6,
    gambar: `${import.meta.env.BASE_URL}assets/tools/cpp.svg`, // TODO: add cpp.png
    nama: "C++",
    ket: "Language",
    dad: "600",
  },
  {
    id: 7,
    gambar: `${import.meta.env.BASE_URL}assets/tools/java.svg`, // TODO: add java.png
    nama: "Java",
    ket: "Language",
    dad: "700",
  },
  {
    id: 8,
    gambar: `${import.meta.env.BASE_URL}assets/tools/django.svg`, // TODO: add django.png
    nama: "Django",
    ket: "Framework",
    dad: "800",
  },
  {
    id: 9,
    gambar: Tools2,
    nama: "React JS",
    ket: "Framework",
    dad: "900",
  },
  {
    id: 10,
    gambar: Tools8,
    nama: "GitHub",
    ket: "Repository",
    dad: "1000",
  },
  {
    id: 11,
    gambar: Tools1,
    nama: "Visual Studio Code",
    ket: "Code Editor",
    dad: "1100",
  },
];

import Proyek1 from "/assets/proyek/Portfolio.jpg";
import Proyek2 from "/assets/proyek/Job Market.jpg";
import Proyek3 from "/assets/proyek/Godavari Pickles.jpg";
import Proyek4 from "/assets/proyek/Cricket Predictor.jpg";
import Proyek5 from "/assets/proyek/Crop disease.jpg";
import Proyek6 from "/assets/proyek/Ann for disease.jpg";

export const listProyek = [
  {
    id: 1,
    image: Proyek1,
    title: "Personal Portfolio Website",
    subtitle: "An interactive personal portfolio showcasing my skills, projects, and experience...",
    fullDescription: "A modern, fully responsive personal portfolio website built with React, Vite, and Tailwind CSS. Features include an animated profile card, smooth scroll animations using AOS, interactive project modals, a tools/skills showcase, and a real-time contact form. Designed with a dark aesthetic and violet accent theme to reflect a professional yet creative identity.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/SuhasVarmaGadiraju/Portfolio",
    dad: "100",
  },
  {
    id: 2,
    image: Proyek2,
    title: "Job Market Intelligence Analyzer",
    subtitle: "Analyzes job market data to identify in-demand skills, salary trends, and hiring patterns...",
    fullDescription: "A data-driven platform that analyzes job market trends using machine learning and statistical analysis. It identifies in-demand skills, tracks salary patterns across industries, and visualizes hiring trends to help job seekers and career counselors make informed decisions. Built with Python and Django on the backend, the system leverages Pandas and NumPy for data processing and delivers insights through an intuitive web dashboard.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/SuhasVarmaGadiraju/Job-market-intelligence-analyzer",
    dad: "200",
  },
  {
    id: 3,
    image: Proyek3,
    title: "Godavari Pickles",
    subtitle: "A web-based platform for showcasing and selling homemade pickles...",
    fullDescription: "An e-commerce website built for a homemade pickles brand, featuring a clean product catalog, intuitive navigation, and a user-friendly interface. The platform showcases a variety of traditional pickle products with descriptions and ordering options, giving the brand a strong digital presence. Developed entirely with HTML, CSS, and JavaScript with a focus on responsive design and smooth user experience.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/SuhasVarmaGadiraju/GodavariPickles",
    dad: "300",
  },
  {
    id: 4,
    image: Proyek4,
    title: "Cricket Prediction Pro",
    subtitle: "A real-time cricket analytics platform with live match predictions...",
    fullDescription: "A real-time cricket analytics platform that processes live match data streams and generates advanced predictions including win probability, player impact scores, and next-ball outcome forecasts. Built on a microservices architecture using Node.js and Python services, the platform uses React with Vite and Tailwind CSS for the frontend, PostgreSQL for data storage, and Docker for containerized deployment.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/SuhasVarmaGadiraju/Cricket-Score-Predictor",
    dad: "400",
  },
  {
    id: 5,
    image: Proyek5,
    title: "Crop Disease Prediction System",
    subtitle: "Detects and classifies crop diseases from plant leaf images using ML...",
    fullDescription: "An intelligent agricultural tool that detects and classifies crop diseases from plant leaf images using deep learning. The system uses TensorFlow/PyTorch models trained on labeled datasets of diseased and healthy crops, with OpenCV handling image preprocessing. By enabling early disease diagnosis, it helps farmers take timely action and reduce crop loss.",
    borderColor: "#10B981",
    gradient: "linear-gradient(180deg, #10B981, #000)",
    url: "https://github.com/SuhasVarmaGadiraju/Crop-Disease-Prediction",
    dad: "500",
  },
  {
    id: 6,
    image: Proyek6,
    title: "ANN for Disease Diagnosis",
    subtitle: "Predicts diseases from symptoms using an Artificial Neural Network model...",
    fullDescription: "A medical diagnosis support system that uses an Artificial Neural Network to predict diseases based on patient symptoms or medical input data. Built with Python using Scikit-learn and TensorFlow, the model is trained on clinical datasets to deliver accurate and early disease predictions. This project highlights the potential of deep learning in healthcare.",
    borderColor: "#3B82F6",
    gradient: "linear-gradient(145deg, #3B82F6, #000)",
    url: "https://github.com/SuhasVarmaGadiraju/Artificial-Neural-Network-for-Disease-Diagnosis",
    dad: "600",
  },
];
