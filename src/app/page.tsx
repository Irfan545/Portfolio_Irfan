"use client";
import LoadingThreeDotsJumping from "./animations/loader";

import Header from "./Header/page";
import { useEffect, useState } from "react";
import { Main } from "./Main/page";
import SkillsSection from "./comoponents/skills";

export default function Home(): React.JSX.Element {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    console.log(loading);
  }, [loading]);
  return (
    <div>
      {loading ? (
        <div className="lg:pl-50 lg:pr-50 sm:pl-0 sm:pr-0 md:pl-25 md:pr-25">
          <div className=""></div>
          <Header />
          <Main />
          <SkillsSection />
        </div>
      ) : (
        <LoadingThreeDotsJumping />
      )}
    </div>
  );
}
