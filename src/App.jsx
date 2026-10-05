import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Certifications from './components/Certifications';
import SelectedWork from './components/SelectedWork';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ImageModal from './components/ImageModal';

function App() {
  const [modalState, setModalState] = useState({
    isOpen: false,
    images: [],
    currentIndex: 0,
  });

  const handleOpenModal = (images, initialIndex = 0) => {
    setModalState({
      isOpen: true,
      images,
      currentIndex: initialIndex,
    });
  };

  const handleOpenCertificateModal = (imageSrc, title, pdfUrl) => {
    setModalState({
      isOpen: true,
      images: [
        {
          id: 'cert-preview',
          title,
          subtitle: 'Official Certificate Verification',
          src: imageSrc,
          pdfUrl,
        }
      ],
      currentIndex: 0,
    });
  };

  const handleCloseModal = () => {
    setModalState((prev) => ({
      ...prev,
      isOpen: false,
    }));
  };

  const handleIndexChange = (newIndex) => {
    setModalState((prev) => ({
      ...prev,
      currentIndex: newIndex,
    }));
  };

  return (
    <div className="min-h-screen bg-[#F4F1EA] text-[#172323] flex flex-col font-sans selection:bg-[#A9C0C1] selection:text-[#172323]">
      {/* 01. Sticky Minimal Navbar */}
      <Navbar />

      {/* Main Content in Exact Order: HERO -> ABOUT -> SKILLS -> EDUCATION -> CERTIFICATIONS -> SELECTED WORK -> ACHIEVEMENTS -> CONTACT */}
      <main className="flex-1">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Certifications onOpenCertificateModal={handleOpenCertificateModal} />
        <SelectedWork onOpenModal={handleOpenModal} />
        <Achievements />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Fullscreen Lightbox Modal for Dashboards & Certificates */}
      <ImageModal
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        images={modalState.images}
        currentIndex={modalState.currentIndex}
        onIndexChange={handleIndexChange}
      />
    </div>
  );
}

export default App;
