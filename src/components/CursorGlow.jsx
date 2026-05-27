import { useEffect } from "react";

const CursorGlow = () => {

  useEffect(() => {

    const glow = document.createElement("div");

    glow.style.position = "fixed";
    glow.style.width = "20px";
    glow.style.height = "20px";
    glow.style.borderRadius = "50%";
    glow.style.background = "rgba(0,255,255,0.5)";
    glow.style.pointerEvents = "none";
    glow.style.zIndex = "9999";
    glow.style.filter = "blur(10px)";

    document.body.appendChild(glow);

    const moveGlow = (e) => {
      glow.style.left = `${e.clientX - 10}px`;
      glow.style.top = `${e.clientY - 10}px`;
    };

    window.addEventListener("mousemove", moveGlow);

    return () => {
      window.removeEventListener("mousemove", moveGlow);
      document.body.removeChild(glow);
    };

  }, []);

  return null;
};

export default CursorGlow;