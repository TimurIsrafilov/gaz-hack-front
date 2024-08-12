import { useState, useRef } from "react";
import { Link } from "react-router-dom";

import styles from "./login.module.css";

import gaz_logo from "../../images/gaz_logo.svg";

import { loginUser } from "../../services/user/actions";
// import { useForm } from "../../hooks/useForm";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Form, Input } from "antd";

function Login() {
  // const inputRef = useRef(null);

  // const { values, handleChange } = useForm({
  //   email: "",
  //   password: "",
  // });

  const [isInputTypePassword, setIsInputTypePassword] = useState(true);

  const dispatch = useDispatch();

  function onPasswordIconClick() {
    setIsInputTypePassword(!isInputTypePassword);
  }

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   dispatch(loginUser(values));
  // }

  return (
    <div className={styles.login}>
      <img className={styles.login__logo} src={gaz_logo} alt="логотип" />

      <Card>
        <Form
          className={styles.login__form}
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          initialValues={{
            remember: true,
          }}
          // onFinish={onFinish}
          // onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <h2 className={styles.login__title}>Вход в систему</h2>
          <Form.Item
            // label="Username"

            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
          >
            <Input
              placeholder="Введите логин"
              className={styles.login__input}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
          >
            <Input.Password
              placeholder="Введите пароль"
              className={styles.login__input}
            />
          </Form.Item>
          <span className={styles.login__note}>Забыли пароль?</span>

          <Form.Item name="button">
            <Button
              type="primary"
              htmlType="submit"
              className={styles.login__button}
            >
              Войти
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}

export default Login;
