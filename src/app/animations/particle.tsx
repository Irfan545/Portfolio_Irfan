import React from "react";
import Particles from "react-tsparticles"; // v1.18.1 uses this name
import { Bounce } from "tsparticles/dist/Options/Classes/Particles/Bounce/Bounce";

const ParticleAnimation = () => {
  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          color: { value: "#131313" },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onHover: {
              enable: false,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            repulse: {
              push: {
                quantity: 4,
              },
              distance: 100,
              duration: 0.9,
            },
          },
        },
        particles: {
          color: {
            value: "#b292ff",
          },

          links: {
            enable: true,
            color: "#fff",
            distance: 100,
            opacity: 0.5,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            value: 200,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: false,
      }}
      className="absolute inset-0 z-[-1] h-full"
    />
  );
};

export default ParticleAnimation;
