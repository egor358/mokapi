//API — это не весь сайт, а конкретный адрес на сервере для работы с данными
import React, { useEffect } from "react";
import styles from "./Login.module.css";
import { useState } from "react";
import { useRef } from "react";
const INITIAL_STATE = {
  username: true,
  password: true,
  phone: true,
};
const submitFormServer = (data) => {
  alert("formIsSubmited");
  console.log(JSON.stringify(data)); //превращает объект в строку
};
function Login() {
  const [data, setData] = useState({
    username: "",
    password: "",
    phone: "",
  });
  const [formValidState, setformValidState] = useState(INITIAL_STATE);
  const usernameRef = useRef(); // создали референс элемент с которым будем взаимод.
  const passwordRef = useRef();
  const phoneRef = useRef();
  const focusError = (formValidState) => { //Создаём "указатели" на поля ввода, чтобы потом ставить курсор
    switch (true) {
      case !formValidState.username:
        usernameRef.current.focus();
        break;
      case !formValidState.password:
        passwordRef.current.focus();
        break;
      case !formValidState.phone:
        
        phoneRef.current.focus();
        break;
    }
  };

  useEffect(() => {
    let timerId;
    if (
      !formValidState.username ||
      !formValidState.password ||
      !formValidState.phone
    ) {
      focusError(formValidState);
      timerId = setTimeout(() => {
        setformValidState(INITIAL_STATE);
      }, 2000);
    }
    return () => {
      clearInterval(timerId);
    };
  }, [formValidState]);

  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };
  // const inputName = 'color'
  // const colorPicker = {
  //   [inputName]:5
  // }
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // собирает все поля с формы
    const formData = new FormData(e.target);
    // console.log(...formData);
    const formProps = Object.fromEntries(formData);
    console.log(formProps);
    let isFormValid = true;
    if (!formProps.username?.trim().length) {
      isFormValid = false;
      setformValidState((state) => ({ ...state, username: false }));
    } else {
      setformValidState((state) => ({ ...state, username: true }));
    }
    if (!formProps.password?.trim().length) {
      isFormValid = false;
      setformValidState((state) => ({ ...state, password: false }));
    } else {
      setformValidState((state) => ({ ...state, password: true }));
    }
    if (!isFormValid) {
    }
    if (!formProps.phone?.trim().length) {
      isFormValid = false;
      setformValidState((state) => ({ ...state, phone: false }));
    } else {
      setformValidState((state) => ({ ...state, phone: true }));
    }
    if (!isFormValid) {
      return;
    }

    submitFormServer(formProps);
    setData({ username: "", password: "", phone: "" });
  };
  return (
    <form onSubmit={handleFormSubmit}>
      <label>
        Username:
        <input
          className={`${formValidState.username ? "" : styles.invalid}`}
          name="username"
          type="email"
          ref={usernameRef}
          value={data.username}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Password:
        <input
          className={`${formValidState.password ? "" : styles.invalid}`}
          name="password"
          type="password"
          ref={passwordRef}
          value={data.password}
          onChange={handleInputChange}
        />
      </label>
      <label>
        Phone:
        <input
          className={`${formValidState.phone ? "" : styles.invalid}`}
          name="phone"
          type="tel"
          ref={phoneRef}
          value={data.phone}
          onChange={handleInputChange}
        />
      </label>
      <button className={styles.button} type="submit">
        Login
      </button>
    </form>
  );
}

export default Login;
