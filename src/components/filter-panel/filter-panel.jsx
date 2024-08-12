import { Button, Checkbox, Form, Select } from "antd";
import { CloseOutlined } from "@ant-design/icons";

import styles from "./filter-panel.module.css";

import { companyStructure } from "../../utils/constants";
import { companyDiagram } from "../../utils/constants";
import { useState } from "react";

function FilterPanel(props) {
  const [form] = Form.useForm();
  const [checkedFullTime, setCheckedFullTime] = useState(false);
  const [checkedOutsource, setCheckedOutsource] = useState(false);

  const handleFullTimeChange = () => {
    props.onFullTimeChange();
    setCheckedFullTime(true);
    setCheckedOutsource(false);
  };

  const handleOutsourceChange = () => {
    props.onOutsourceChange();
    setCheckedOutsource(true);
    setCheckedFullTime(false);
  };

  const handleFormReset = () => {
    props.handleFormReset();
    setCheckedFullTime(false);
    setCheckedOutsource(false);
  };

  const uniqueGradesOptions = [];
  companyStructure.map((item) => {
    if (uniqueGradesOptions.find((i) => i === item.grade)) {
      return;
    } else {
      uniqueGradesOptions.push(item.grade);
    }
  });

  const optionGrades = [];
  uniqueGradesOptions.map((item) => {
    optionGrades.push({
      value: item,
      label: item,
    });
  });

  const uniqueTimezoneOptions = [];
  companyStructure.map((item) => {
    if (uniqueTimezoneOptions.find((i) => i === item.timezone)) {
      return;
    } else {
      uniqueTimezoneOptions.push(item.timezone);
    }
  });

  const optionTimezones = [];
  uniqueTimezoneOptions.map((item) => {
    optionTimezones.push({
      value: item,
      label: item,
    });
  });

  const optionDepartments = [];
  companyDiagram.departments.map((item) => {
    optionDepartments.push({
      value: item.id,
      label: item.name,
    });
  });

  return (
    <div className={styles.filter_panel}>
      <Form
        form={form}
        name="validateOnly"
        layout="vertical"
        autoComplete="off"
        className={styles.filter_panel_container}
      >
        <div className={styles.filter_panel_title_container}>
          <h3 className={styles.filter_panel_title}>Фильтры</h3>
          <button
            className={styles.filter_panel_button_close}
            onClick={props.handleFormClose}
          >
            <CloseOutlined />
          </button>
        </div>

        <h4 className={styles.filter_panel_point}>Сотрудники</h4>
        <Form.Item name={"Штатные"}>
          <Checkbox
            checked={checkedFullTime}
            onChange={handleFullTimeChange}
            className={styles.filter_panel_checkbox}
          >
            Штатные
          </Checkbox>
        </Form.Item>
        <Form.Item name={"Аутсорс"}>
          <Checkbox
            checked={checkedOutsource}
            onChange={handleOutsourceChange}
            className={styles.filter_panel_checkbox}
          >
            Аутсорс
          </Checkbox>
        </Form.Item>
        <h4 className={styles.filter_panel_point}>Грейд</h4>
        <Form.Item name={"Все грейды"}>
          <Select
            className={styles.filter_panel_select}
            initialvalues="Все грейды"
            onChange={props.handleGradeChange}
            options={optionGrades}
          />
        </Form.Item>
        <h4 className={styles.filter_panel_point}>Локация</h4>
        <Form.Item name={"Все локации"}>
          <Select
            className={styles.filter_panel_select}
            initialvalues="Все локации"
            onChange={props.handleLocationeChange}
            options={optionTimezones}
          />
        </Form.Item>
        <h4 className={styles.filter_panel_point}>Отделы</h4>
        <Form.Item name={"Все отделы"}>
          <Select
            className={styles.filter_panel_select}
            initialvalues="Все отделы"
            onChange={props.handleDepartmentChange}
            options={optionDepartments}
          />
        </Form.Item>
        <Button
          className={styles.filter_panel_button_reset}
          htmlType="reset"
          type="primary"
          onClick={handleFormReset}
        >
          Сбросить фильтры
        </Button>
      </Form>
    </div>
  );
}

export default FilterPanel;
