import React from "react";
import styles from "./OutputArea.module.css";

const OutputArea = (props) => {
  return (
    <ul className={`${styles["output-area"]}`}>
      {props.users.map((user) => (
        <li key={user.id}>
          {user.name} - {user.age}{" "}
          {user.age % 10 === 2 || user.age % 10 === 3 || user.age % 10 === 4
            ? "года"
            : user.age % 10 === 1
            ? "год"
            : "лет"}
          .
        </li>
      ))}
    </ul>
  );
};

export default OutputArea;
