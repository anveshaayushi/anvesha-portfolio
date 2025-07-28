import { useEffect, useState } from "react";

export const StarBackground = () => {
  const [stars, setStars] = useState([]);
  const [meteors, setMeteors] = useState([]);

  useEffect(() => {
    generateStars();
    generateMeteors();
    const handleresize = () => {

      generateStars();
    };
    window.addEventListener("resize", handleresize);
    return () => window.removeEventListener("resize", handleresize);
  }, []);

  const generateStars = () => {
    const noofstars = Math.floor(
      (window.innerWidth * window.innerHeight) / 10000
    );
    const newstars = [];

    for (let i = 0; i < noofstars; i++) {
      newstars.push({
        id: i,
        size: Math.random() * 3 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: Math.random() * 0.5 + 0.5,
        animationDuration: Math.random() * 4 + 2,
      });
    }

    setStars(newstars);
  };

  const generateMeteors = () => {
    const newmeteors = [];

    for (let i = 0; i < 5; i++) {
      newmeteors.push({
        id: i,
        size: Math.random() * 2 + 1,
        x: Math.random() * 100,
        y: Math.random() * 100,
        delay: `${Math.random() * 5}s`,
        animationDuration: Math.random() * 5 + 3,
      });
    }

    setMeteors(newmeteors);
  };

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
      {stars.map((star) => (
        <div
          key={`star-${star.id}`}
          className="star animate-pulse-subtle"
          style={{
            position: "absolute",
            width: `${star.size}px`,
            height: `${star.size}px`,
            left: `${star.x}%`,
            top: `${star.y}%`,
            opacity: star.opacity,
            animationDuration: `${star.animationDuration}s`,
          }}
        />
      ))}

      {meteors.map((meteor) => (
        <div
          key={`meteor-${meteor.id}`}
          className="meteor animate-meteor"
          style={{
            position: "absolute",
            width: `${meteor.size * 50}px`,
            height: `${meteor.size * 2}px`,
            left: `${meteor.x}%`,
            top: `${meteor.y}%`,
            animationDelay: meteor.delay,
            animationDuration: `${meteor.animationDuration}s`,
          }}
        />
      ))}
    </div>
  );
};
