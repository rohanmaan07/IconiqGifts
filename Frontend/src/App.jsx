import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import EnquiryFormModal from "./Components/EnquiryForm";
import HomePage from "./Pages/HomePage";
import ContactPage from "./Pages/ContactPage";
import AboutPage from "./Pages/AboutPage";
import GiftingPage from "./Pages/GiftingPage";
import Footer from "./Pages/Footer";
import "./index.css";
import FAQs from "./Components/FAQs";
import BlogPage from "./Pages/BlogPage";
import BlogPostPage from "./Pages/BlogPostPage";

function App() {
  const [modalType, setModalType] = useState(null);

  return (
    <>
      <Navbar onOpenModal={(type) => setModalType(type)} />
      {modalType && (
        <EnquiryFormModal type={modalType} onClose={() => setModalType(null)} />
      )}

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/gifting" element={<GiftingPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/faqs" element={<FAQs/>}/>
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogPostPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
