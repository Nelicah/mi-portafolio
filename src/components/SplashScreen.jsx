import gif from "../images/giphy.gif";
import { useEffect, useRef } from "react";
import gsap from "gsap";

function SplashScreen({ onFinish }) {
  const splashRef = useRef(null);

  useEffect(() => {
    gsap.to(splashRef.current, {
      opacity: 0,
      delay: 3,
      duration: 0.8,
      onComplete: () => {
        splashRef.current.style.display = "none";
        setTimeout(onFinish, 400);
      },
    });
  }, []);

  return (
    <div
      ref={splashRef}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-900"
    >
      <img className="w-72 h-72 rounded-lg" src={gif} alt="gif loading" />
      <p className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent text-2xl mt-4">
        Nelicah developer
      </p>
      <div className="flex gap-1 mt-4">
        <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce"></span>
        <span className="w-2 h-2 bg-purple-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
        <span className="w-2 h-2 bg-pink-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
      </div>
    </div>
  );
}

export default SplashScreen;
