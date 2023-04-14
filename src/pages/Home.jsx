import React from "react";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Slider from "../components/Slider";

export default function Home() {
  return (
    <>
      <Announcement />
      <Navbar />
      <Slider />
    </>
  );
}
