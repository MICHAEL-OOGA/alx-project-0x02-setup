import React from "react";
import Button from "@/components/common/Button";

const About = () => {
  return (
    <div className="flex gap-4 justify-center items-center h-screen">
      <Button label="Small" size="small" shape="rounded-sm" />
      <Button label="Medium" size="medium" shape="rounded-md" />
      <Button label="Large" size="large" shape="rounded-full" />
    </div>
  );
};

export default About;
