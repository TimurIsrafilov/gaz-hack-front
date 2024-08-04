import { Spin } from "antd";

import style from "./preloader.module.css";

function Preloader() {
  const contentStyle = {
    borderRadius: 4,
  };

  return (
    <section className={style.preloader}>
      <div className={style.preloader__container}>
        <Spin tip="Loading" size="large">
          <div style={contentStyle} />
        </Spin>
      </div>
    </section>
  );
}

export default Preloader;
