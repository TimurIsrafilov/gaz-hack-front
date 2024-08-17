import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

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
import { loadUsers } from "../../services/users/actions";
import { loadProjects } from "../../services/projects/actions";

import { OnlyAuth, OnlyUnAuth } from "../protected-route/protected-route";
import Worker from "../../pages/worker/worker";
import NotFound404 from "../../pages/not-found-404/not-found-404";

import { selectUserLoading } from "../../services/user/reducer";
import { selectUsersLoading } from "../../services/users/reducer";
import { selectWorkerLoading } from "../../services/worker/reducer";
import { selectProjectsLoading } from "../../services/projects/reducer";

import { selectUser } from "../../services/user/reducer";
import { selectUsers } from "../../services/users/reducer";
import { selectWorker } from "../../services/worker/reducer";
import { selectProjects } from "../../services/projects/reducer";
import CatalogCard from "../catalog-card/catalog-card";


function App() {
  const dispatch = useDispatch();

  // const user = useSelector(selectUser);
  // const users = useSelector(selectUsers);
  // const worker = useSelector(selectWorker);
  // const projects = useSelector(selectProjects);

  //   const [user, setUser] = useState(null);
  //   const [users, setUsers] = useState(null);
  //   const [worker, setWorker] = useState(null);
  //   const [projects, setProjects] = useState(null);

  // setUser(useSelector(selectUser));
  // setUsers(useSelector(selectUsers));
  // setWorker(useSelector(selectWorker));
  // setProjects(useSelector(selectProjects));

  const isUserLoading = useSelector(selectUserLoading);
  const isUsersLoading = useSelector(selectUsersLoading);
  const isWorkerLoading = useSelector(selectWorkerLoading);
  const isProjectsLoading = useSelector(selectProjectsLoading);

  const isLoading =
    isUserLoading || isUsersLoading || isWorkerLoading || isProjectsLoading;

  const location = useLocation();

  const state = location.state;

  useEffect(() => {
    dispatch(loadUser());
    dispatch(loadUsers());
    dispatch(loadProjects());
  }, []);
  // }, [user,users, worker ,projects]);

  const navigate = useNavigate();
  const handleOnClose = () => {
    navigate(-1);
  };

  return (
    <div className={styles.page}>
      {isLoading && (
        <Modal isLoading={isLoading}>
          <Preloader />
        </Modal>
      )}

      {location.pathname !== "/login" ? <Header /> : ""}
      {!isLoading && (
        <Routes location={state?.backgroundLocation || location}>
          {/* <Route path="/login" element={<OnlyUnAuth component={<Login />} />} /> функционал защищенного роутинга отключен ввиду неготовности бэкенда
        <Route path="/profile" element={<OnlyAuth component={<Profile />} />} />
        <Route path="/diagram" element={<OnlyAuth component={<Diagram />} />} />
        <Route path="/company" element={<OnlyAuth component={<Company />} />} />
        <Route path="/catalog" element={<OnlyAuth component={<Catalog />} />} /> */}

          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Profile />} />
          <Route path="/diagram" element={<Diagram />} />
          <Route path="/company" element={<Company />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/users/:number" element={<Worker />} />
          {/* <Route
            path="/diagram/users/:number"
            element={
              <Modal handleOnClose={handleOnClose}>
                <PopupUser />
              </Modal> 
            }
          /> */}
          <Route path="*" element={<NotFound404 />} />
        </Routes>
      )}
{/* 
      {state?.backgroundLocation && (
        <Routes>
                 <Route
            path="/diagram/:number"
            element={
              <Modal handleOnClose={handleOnClose}>
                <PopupUser />
              </Modal>
            }
          />
        </Routes>
      )} */}
    </div>
  );
}

export default App;
