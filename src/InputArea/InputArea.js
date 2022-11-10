import React, { useState } from "react";
import Modal from "../Modal/Modal";
import ConfirmButton from "./ConfirmButton";

import styles from "./InputArea.module.css";

const InputArea = (props) => {
  const [inputName, setInputName] = useState("");
  const [inputAge, setInputAge] = useState("");
  const [modalActive, setModalActive] = useState(false);

  const inputNameHandler = (event) => {
    setInputName(event.target.value);
  };

  const inputAgeHandler = (event) => {
    setInputAge(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    if (!inputAge.trim().length || !inputAge.trim().length) {
      setModalActive(true);
    }
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles["input-form"]}`}>
        <label>Имя</label>
        <input type="text" list="names" onChange={inputNameHandler}></input>
        <datalist id="names">
          <option value="peter"></option>
          <option value="john"></option>
          <option value="maria"></option>
        </datalist>

        <label>Возраст</label>
        <input type="number" step="1" onChange={inputAgeHandler}></input>

        <ConfirmButton type="submit">Добавить пользователя</ConfirmButton>
      </div>
      <Modal active={modalActive} onClose={() => setModalActive(false)} />
    </form>
  );
};

export default InputArea;
