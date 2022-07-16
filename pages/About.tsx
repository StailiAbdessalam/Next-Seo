import React from "react";
import { NextSeo } from "next-seo";
const About = () => {
  const SEO = {
    title: "SEO default page",
    description: "just your normale about page",
  };
  return (
    <>
      <NextSeo {...SEO} />
      <div>About</div>
    </>
  );
};

export default About;
