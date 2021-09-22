import { useEffect } from "react";

import s from "./Modal.module.css";

export default function Modal({ img, onClose }) {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  // componentDidMount() {
  //   window.addEventListener("keydown", this.handleKeyDown);
  // }

  // componentWillUnmount() {
  //   window.removeEventListener("keydown", this.handleKeyDown);
  // }

  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      onClose();
    }
  };

  const handleBackdropClick = (event) => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };

  return (
    <div className={s.Overlay} onClick={handleBackdropClick}>
      <div className={s.Modal}>
        <img src={img} alt="" />
      </div>
    </div>
  );
}
