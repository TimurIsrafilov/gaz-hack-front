import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, useLocation } from "react-router-dom";

import styles from "./app.module.css";

import Header from "../header/header";
import Profile from "../../pages/profile/profile";
import Diagram from "../../pages/diagram/diagram";
import Company from "../../pages/company/company";
import Catalog from "../../pages/catalog/catalog";
import Preloader from "../preloader/preloader";
import Login from "../../pages/login/login";
import Modal from "../modal/modal";

import { loadUser } from "../../services/user/actions";
import { selectUserLoading } from "../../services/user/reducer";
import { OnlyAuth, OnlyUnAuth } from "../protected-route/protected-route";
import Worker from "../../pages/worker/worker";
import NotFound404 from "../../pages/not-found-404/not-found-404";

function App() {
  const dispatch = useDispatch();

  const isUserLoading = useSelector(selectUserLoading);
  const isLoading = isUserLoading;

  const location = useLocation();

  const state = location.state;

  useEffect(() => {
    dispatch(loadUser());
  }, []);

  return (
    <div className={styles.page}>
      {isLoading && (
        <Modal isLoading={isLoading}>
          <Preloader />
        </Modal>
      )}

      {location.pathname !== "/login" ? <Header /> : ""}

      <Routes location={state?.backgroundLocation || location}>
        {/* <Route path="/login" element={<OnlyUnAuth component={<Login />} />} /> функционал защищенного роутинга отключен ввиду неготовности бэкенда
        <Route path="/profile" element={<OnlyAuth component={<Profile />} />} />
        <Route path="/diagram" element={<OnlyAuth component={<Diagram />} />} />
        <Route path="/company" element={<OnlyAuth component={<Company />} />} />
        <Route path="/catalog" element={<OnlyAuth component={<Catalog />} />} /> */}

        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/diagram" element={<Diagram />} />
        <Route path="/company" element={<Company />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/users/:number" element={<Worker />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </div>
  );
}

export default App;
