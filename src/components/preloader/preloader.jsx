import { Spin } from "antd";

function Preloader() {
  const contentStyle = {
    padding: 50,
    borderRadius: 4,
  };

  return (
    <section>
      <Spin tip="Loading ..." size="large">
        <div style={contentStyle} />
      </Spin>
    </section>
  );
}

export default Preloader;
