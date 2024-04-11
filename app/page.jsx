import Feed from "@components/Feed";
import { Suspense } from "react";

// This is being rendered as a SERVER-SIDE COMPONENT.
// All components in Next.js project default as REACT-SERVER COMPONENTS. (SSR)
// add "use client" to turn it into a client-side component.
// Anytime you use hooks/state/interactivity(like onClick) in react, you need to add "use client", as state management in react is handled on the clientside.
// Basically, when theres an error, turn it into a client component.

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      {/* Underscores in tailwindcss = using global styling from globals.css */}
      <h1 className="head_text text-center">
        Discover & Share
        <br />
        {/* <br className="max-md: hidden" /> */}
        <span className="orange_gradient text-center">AI-Powered Prompts</span>
      </h1>
      <p className="desc text-center">
        Promptopia is an open-source AI prompting tool for discovering,
        creating, and sharing prompts.
      </p>
      <Suspense fallback={<div>Awaiting Feed</div>}>
        <Feed />
      </Suspense>
    </section>
  );
};

export default Home;
