import React from "react";

const Button = ({ text, className, id }) => {
  const handleClick = () => {
    const target = document.getElementById("counter");
    if (target && id) {
      const offset = window.innerHeight * 0.15;
      const top =
        target.getBoundingClientRect().top + window.scrollY - offset;
      window.scroll({ top, behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`${className ?? ""} cta-wrapper`}
      aria-label={text || "See my work"}
    >
      <div className="cta-button group">
        <div className="bg-circle" />
        <p className="text">{text || "See my Work"}</p>
        <div className="arrow-wrapper">
          <img src="/images/arrow-down.svg" alt="" />
        </div>
      </div>
    </button>
  );
};

export default Button;
