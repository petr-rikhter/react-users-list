import React, { Fragment } from "react";
import styles from "./Modal.module.css";

const Modal = ({ active, onClose }) => {
  if (!active) return;

  return (
    <Fragment>
      <div
        className={`${styles["modal"]} ${styles.activated}`}
        onClick={onClose}
      >
        <div
          className={`${styles["modal__content"]}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={`${styles["content__main"]}`}>
            <p>Некорректный ввод</p>
          </div>

          <div className={`${styles["content__second"]}`}>
            <p>Заполните поля "Имя" и "Возраст"</p>
          </div>

          <div className={`${styles["content__button"]}`}>
            <button onClick={onClose}>Закрыть</button>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Modal;
