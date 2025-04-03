import React from "react";
import Herosection from "../components/Herosection";
import Faq from "../components/Faq"
import Testimonials from "../components/Testimonials";

const HomePage = () => {
  return (
    <div>
      <Herosection />
      <Faq />
      <Testimonials />
    </div>
  );
};

export default HomePage;
