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
import Sustainable from "./Hampers/Sustainable";
import Tech from "./Hampers/Tech";
import Snacks from "./Hampers/Snacks";
import Stationary from "./Hampers/Stationary";
import CustomizeBottle from "./Hampers/CustomizeBottle";
import ChoclateFlower from "./Hampers/ChoclateFlower";

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
        <Route path="/sustainable-hampers" element={<Sustainable/>}/>
        <Route path="/tech-hampers" element={<Tech/>}/>
        <Route path="/snack-hampers" element={<Snacks/>}/>
        <Route path="/stationery-hampers" element={<Stationary/>}/>
        <Route path="/customized-bottles" element={<CustomizeBottle/>}/>
        <Route path="/chocolate-flower-hampers" element={<ChoclateFlower/>}/>
      </Routes>

      <Footer />
    </>
  );
}

export default App;
