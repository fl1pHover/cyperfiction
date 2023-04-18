"use client";
import React, { useEffect, useState } from "react";

const Boy = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  console.log(padWithLeadingZeros(Math.round(scrollY / 10), 4));

  function padWithLeadingZeros(num, totalLength) {
    return String(num).padStart(totalLength, "0");
  }

  return (
    <>
      <img
        src={
          "./boy/male" +
          padWithLeadingZeros(Math.round(scrollY / 10), 4) +
          ".png"
        }
        className="fixed top-0 left-0 z-10 object-cover h-screen"
      />
    </>
  );
};

export default Boy;
