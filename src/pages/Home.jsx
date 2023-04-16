import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Slider from "../components/Slider";
import ProductList from "../components/ProductList";
import Categories from "../components/Categories";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

export default function Home() {
  const [showAnnouncement, setShowAnnouncement] = useState(true);

  function renderAnnouncement() {
    setShowAnnouncement((currStatus) => !currStatus);
  }

  return (
    <>
      {showAnnouncement && <Announcement render={renderAnnouncement} />}
      <Navbar />
      <Slider />
      <Categories />
      <ProductList />
      <Newsletter />
      <Footer />
    </>
  );
}
