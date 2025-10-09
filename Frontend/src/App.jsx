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
import ScrollToTop from "./Components/ScrollToTop";
import Category from "./Pages/Category";
import EmployeeGifts from "./Gifts/EmployeeGifts";
import ClientGifts from "./Gifts/ClientGifts";
import Premium from "./Gifts/Premium";
import Ocassion from "./Ocassion/Ocassion";
import Anniversary from "./Ocassion/Anniversary";
import Holidays from "./Ocassion/Holidays";
import Festivals from "./Ocassion/Festivals";

function App() {
  const [modalType, setModalType] = useState(null);

  return (
    <>
      <Navbar onOpenModal={(type) => setModalType(type)} />
      {modalType && (
        <EnquiryFormModal type={modalType} onClose={() => setModalType(null)} />
      )}
      <ScrollToTop/>
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
        <Route path="/category" element={<Category/>}/>
        <Route path="/employees" element={<EmployeeGifts/>}/>
        <Route path="/clients" element={<ClientGifts/>}/>
        <Route path="/premium" element={<Premium/>}/>
        <Route path="/occasion" element={<Ocassion/>}/>
        <Route path="/anniversary" element={<Anniversary/>}/>
        <Route path="/holidays" element={<Holidays/>}/>
        <Route path="/festivals" element={<Festivals/>}/>
        
        
      </Routes>

      <Footer />
    </>
  );
}

export default App;
