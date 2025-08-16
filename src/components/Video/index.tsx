"use client";

import VideoModal from "@/components/video-modal";
import Image from "next/image";
import { useState } from "react";
import SectionTitle from "../Common/SectionTitle";

export default function Video() {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <section className="relative z-10 py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="We are ready to help"
            paragraph="At PD Infosystems, we specialize in delivering innovative IT solutions that empower businesses to grow, adapt, and succeed in the digital era. From web development to software solutions, our team ensures every project is crafted with precision, efficiency, and a client-first approach."
            center
            mb="80px"
          />
        </div>
      </section>

      {/* <VideoModal
        isOpen={isOpen}
        onClose={() => setOpen(false)}
        channel="youtube"
        videoId="L61p2uyiMSo"
      /> */}
    </>
  );
};
