import React from "react";
import styles from "../HoverText.module.css";

const HoverText = () => {
  return (
    <div className="grid bg-white">
      <BubbleText />
    </div>
  );
};

const BubbleText = () => {
  return (
    <h2 className="text-5xl font-thin text-gray-700">
      {"Ossama's Portfolio".split("").map((child, idx) => (
        <span className={styles.hoverText} key={idx}>
          {child}
        </span>
      ))}
    </h2>
  );
};

export default HoverText;