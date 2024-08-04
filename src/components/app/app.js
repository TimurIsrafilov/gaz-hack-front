import { useEffect } from "react";

import { useDispatch } from "react-redux";

import { Routes, Route } from "react-router-dom";

import Header from "../header/header";

import styles from "./app.module.css";
import Main from "../main/main";
import Profile from "../profile/profile";

import { loadUser } from "../../services/user/actions";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  });

  return (
    <div className={styles.page}>
      <Header />
      <Main />
      <Routes>
        <Route path="/" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;

// // компоненты
// // Компонента 1
// // Компонента 2
// // Компонента 3
// {
//   name: "Компонента 1";
//   id: [1, 2, 3]
// }

// // подразделения
// // Дизайн
// // Девелопмент
// // Анализ
// // Менеджмент
// // Маркетинг
// // HR
// // Девопсы
// {
//   name: "Дизайн";
//   id: 1
// }

// // команды
// // Команда 1
// // Команда 2
// // Команда 3
// {
//   name: "Команда 1";
//   id: 1
// }
