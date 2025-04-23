"use client";

import { animate, stagger } from "motion";
import { splitText } from "motion-plus";
import { useEffect, useRef, useState } from "react";
import LoadingThreeDotsJumping from "./loader";

export default function SplitText({ text }: { text: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    document.fonts.ready.then(() => {
      if (!containerRef.current) return;

      // Hide the container until the fonts are loaded
      containerRef.current.style.visibility = "visible";

      const { words } = splitText(containerRef.current.querySelector("h1")!);
      console.log(isClient);
      // Animate the words in the h1
      animate(
        words,
        { opacity: [0, 1], y: [10, 0] },
        {
          type: "spring",
          duration: 4,
          bounce: 0,
          delay: stagger(0.05),
        }
      );
    });
    setIsClient(true);
    console.log(isClient);
  }, [isClient]);

  return (
    <>
      {isClient ? (
        <div className="container text-white" ref={containerRef}>
          <h1 className="h1">{text}</h1>
          <Stylesheet />
        </div>
      ) : (
        ""
      )}
    </>
  );
}

function Stylesheet() {
  return (
    <style>{`
            .container {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 100%;
                max-width: 420px;
                text-align: left;
                visibility: hidden;
            }

            .split-word {
                will-change: transform, opacity;
            }
            .h1 {
                font-size: 2.5rem;
                
                margin: 0;
            ;
            }
        `}</style>
  );
}
