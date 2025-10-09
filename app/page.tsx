import React from "react";
// import { Button } from "@/components/ui/button";
import CompanionCard from "@/components/CompanionCard";
import CompanionsList from "@/components/CompanionsList";
import CTA from "@/components/CTA";

import { recentSessions } from "@/constants";

const Page = () => {
  return (
    <main>
      <h1 className="text-2xl underline">Popular Companion</h1>
      <section className="home-section">
        <CompanionCard id={"123"} name={"Neura the Brainly Explorer"} topic={"Neural Network of the Brain"} subject={"science"} duration={45} color={"#ffda6e"} />
        <CompanionCard id={"456"} name={"Countsy The Number Wizard"} topic={"Derivative & Integrals"} subject={"math"} duration={30} color={"#e5d0ff"} />
        <CompanionCard id={"789"} name={"Verba The Vocabulary Builder"} topic={"English Literature"} subject={"language"} duration={30} color={"#BDE7FF"} />
      </section>
      <section className="home-section">
        <CompanionsList title={"Recently completed sessions"} companions={recentSessions} classNames="w-2/3 max-lg:w-full" />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
