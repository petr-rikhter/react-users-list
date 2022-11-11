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
      return;
    }

    if (+inputAge <= 0) {
      alert("Введите возраст больше 0!");
    }

    props.onCreateUsers(inputName, inputAge);

    setInputName("");
    setInputAge("");
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className={`${styles["input-form"]}`}>
        <label htmlFor="name">Имя</label>
        <input
          id="name"
          type="text"
          list="names"
          onChange={inputNameHandler}
          value={inputName}
        ></input>
        <datalist id="names">
          <option value="peter"></option>
          <option value="john"></option>
          <option value="maria"></option>
        </datalist>

        <label htmlFor="age">Возраст</label>
        <input
          id="age"
          type="number"
          step="1"
          onChange={inputAgeHandler}
          value={inputAge}
        ></input>

        <ConfirmButton type="submit">Добавить пользователя</ConfirmButton>
      </div>
      <Modal active={modalActive} onClose={() => setModalActive(false)} />
    </form>
  );
};

export default InputArea;
