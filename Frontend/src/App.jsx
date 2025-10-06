import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import HomeCarousel from "./Components/HomeCarousal";
import EnquiryFormModal from "./Components/EnquiryForm";
import './index.css';
import Footer from "./Pages/Footer";
import ContactPage from "./Pages/ContactPage";

function App() {
  const [modalType, setModalType] = useState(null);

  return (
    <>
      <Navbar onOpenModal={(type) => setModalType(type)} />
        {modalType && (
        <EnquiryFormModal 
          type={modalType} 
          onClose={() => setModalType(null)} 
        />
      )}
      <HomeCarousel />
      <ContactPage/>
      <Footer/>
    </>
  );
}

export default App;