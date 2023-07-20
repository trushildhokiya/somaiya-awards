import React from 'react'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const About = () => {
  return (
    <div className='font-Poppins'>
      <Navbar />

      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-4">About KJ Somaiya Institute of Technology</h1>
        <p className="mb-4">
          KJ Somaiya Institute of Technology (KJSIT) is one of the premier engineering institutes in India, known for
          its commitment to academic excellence and fostering innovation. Established in 1983, the institute is
          affiliated with the University of Mumbai and is located in the vibrant city of Mumbai, Maharashtra.
        </p>

        <h2 className="text-2xl font-bold mb-2">Our Vision</h2>
        <p className="mb-4">
          To be a world-class engineering institute that imparts transformative education, nurtures creativity,
          encourages research, and produces technologically adept and socially responsible professionals.
        </p>

        <h2 className="text-2xl font-bold mb-2">Our Mission</h2>
        <p className="mb-4">
          Our mission is to provide a dynamic learning environment that fosters innovation, research, and creativity.
          We strive to empower our students with knowledge and skills to excel in their chosen fields, contribute to
          society, and address global challenges.
        </p>

        <h2 className="text-2xl font-bold mb-2">Key Features</h2>
        <ul className="list-disc list-inside mb-4">
          <li>State-of-the-art infrastructure and well-equipped laboratories.</li>
          <li>Experienced and dedicated faculty members with a passion for teaching and research.</li>
          <li>Industry partnerships and collaborations for practical exposure and internships.</li>
          <li>Active placement cell to assist students in securing rewarding career opportunities.</li>
          <li>Robust research and innovation ecosystem to encourage cutting-edge technology development.</li>
          <li>Wide range of academic programs at the undergraduate and postgraduate levels.</li>
          <li>Strong emphasis on holistic development through co-curricular and extracurricular activities.</li>
        </ul>

        <h2 className="text-2xl font-bold mb-2">Accreditations and Rankings</h2>
        <p className="mb-4">
          KJ Somaiya Institute of Technology has received accreditations from prestigious bodies and has been ranked
          among the top engineering colleges in India. Our commitment to academic excellence and research has earned us
          recognition from national and international organizations.
        </p>

        <h2 className="text-2xl font-bold mb-2">Join Us</h2>
        <p className="mb-4">
          We welcome bright and ambitious minds who aspire to pursue engineering and technology education. At KJ
          Somaiya Institute of Technology, we nurture talent and provide an enriching environment for students to grow
          academically and personally. Join us on our journey of transforming lives through education and innovation.
        </p>
      </div>

      <Footer />
    </div>
  )
}

export default About
