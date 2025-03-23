import React from "react";
import styles from "./CustomButton.module.css"

const CustomButton = ({ text, onClick, variant = "primary", size = "md" }) => {
  return (
    <button className={styles.btnCustom} onClick={onClick}>
      {text}
    </button>
  );
};

export default CustomButton;
