import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Page | Free Next.js Template for Startup and SaaS",
  description: "This is About Page for Startup Nextjs Template",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="About Page"
        description="PD Infosystems is an innovative IT startup dedicated to delivering high-quality, scalable, and secure technology solutions. We specialize in software development, web applications, and digital transformation services that help businesses grow and adapt in today’s fast-changing market. Our mission is to combine creativity, technical expertise, and a client-first approach to deliver solutions that make a real impact."
      />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
