import React from "react";
import Card from "@/components/common/Card";

const Home = () => {
  return (
    <main className="p-6 space-y-4">
      <Card
        title="Fast Development"
        content="Build apps quickly using Next.js and Tailwind."
      />
      <Card
        title="Typed with TypeScript"
        content="Enjoy full type safety across your components."
      />
      <Card
        title="Reusable Components"
        content="Break your UI into clean, reusable parts."
      />
    </main>
  );
};

export default Home;
