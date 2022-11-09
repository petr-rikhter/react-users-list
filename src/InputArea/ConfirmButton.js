import React from "react";
import styles from "./ConfirmButton.module.css";

const ConfirmButton = (props) => {
  return (
    <button className={styles.button} type={props.type}>
      {props.children}
    </button>
  );
};

export default ConfirmButton;
