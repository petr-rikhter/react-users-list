import React, { Fragment, useRef, useState } from "react";
import Modal from "../Modal/Modal";
import ConfirmButton from "./ConfirmButton";

import styles from "./InputArea.module.css";

const InputArea = (props) => {
  const inputNameRef = useRef();
  const inputAgeRef = useRef();
  const [modalActive, setModalActive] = useState(false);

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const inputName = inputNameRef.current.value;
    const inputAge = inputAgeRef.current.value;

    if (!inputAge.trim().length || !inputAge.trim().length) {
      setModalActive(true);
      return;
    }

    if (+inputAge <= 0) {
      alert("Введите возраст больше 0!");
      inputAgeRef.current.value = "";
      return;
    }

    props.onCreateUsers(inputName, inputAge);

    // setInputName("");
    // setInputAge("");
    inputNameRef.current.value = "";
    inputAgeRef.current.value = "";
  };

  return (
    <Fragment>
      <form onSubmit={formSubmitHandler}>
        <div className={`${styles["input-form"]}`}>
          <label htmlFor="name">Имя</label>
          <input id="name" type="text" list="names" ref={inputNameRef}></input>
          <datalist id="names">
            <option value="Petr"></option>
            <option value="John"></option>
            <option value="Julia"></option>
          </datalist>

          <label htmlFor="age">Возраст</label>
          <input id="age" type="number" step="1" ref={inputAgeRef}></input>

          <ConfirmButton type="submit">Добавить пользователя</ConfirmButton>
        </div>
        <Modal active={modalActive} onClose={() => setModalActive(false)} />
      </form>
    </Fragment>
  );
};

export default InputArea;
