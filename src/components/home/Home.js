import Hero from "../hero/Hero";
import { useEffect } from "react";
import ProgramBanner from "../program/ProgramBanner";
import Benefit from "../benefit/Benefit";
import AboutBanner from "../about/AboutBanner";
import Info from "../info/Info";
import Knowledge from "../knowledge/Knowledge";
import Member from "../member/Member";
import Testimonial from "../testimonial/Testimonial";
import ContactBanner from "../contact/ContactBanner";

export default function Home() {
  useEffect(() => {
    document.title = "Hallo Ayangku";
  }, []);
  return (
    <>
      <Hero />
      <ProgramBanner />
      <Benefit />
      <AboutBanner />
      <Info />
      <Knowledge />
      <Member />
      <Testimonial />
      <ContactBanner />
    </>
  );
}
