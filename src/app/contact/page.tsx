import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Page | Free Next.js Template for Startup and SaaS",
  description: "This is Contact Page for Startup Nextjs Template",
  // other metadata
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Contact Page"
        description="We’re here to answer your questions, discuss your project ideas, and explore how our IT solutions can help your business grow. Whether you’re looking for a custom software solution, website development, or ongoing technical support — our team is just a message away."
      />

      <Contact />
    </>
  );
};

export default ContactPage;
