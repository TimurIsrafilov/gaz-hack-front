import { useState, useEffect } from "react";

import { useSelector } from "react-redux";

import { Button, Checkbox, Form, Select } from "antd";
import { CloseOutlined } from "@ant-design/icons";

import styles from "./filter-panel.module.css";

import { selectUsers } from "../../services/users/reducer";
import { selectProjects } from "../../services/projects/reducer";

function FilterPanel(props) {
  const companyStructure = useSelector(selectUsers);
  const companyDiagram = useSelector(selectProjects);

  const [form] = Form.useForm();
  const [checkedFullTime, setCheckedFullTime] = useState(false);
  const [checkedOutsource, setCheckedOutsource] = useState(false);
  const [disabledButton, setDisabledButton] = useState(true);

  const handleFullTimeChange = () => {
    props.onFullTimeChange();
    setCheckedFullTime(true);
    setCheckedOutsource(false);
    setDisabledButton(false);
  };

  const handleOutsourceChange = () => {
    props.onOutsourceChange();
    setCheckedOutsource(true);
    setCheckedFullTime(false);
    setDisabledButton(false);
  };

  const handleFormReset = () => {
    props.handleFormReset();
    setDisabledButton(true);
    setCheckedFullTime(false);
    setCheckedOutsource(false);
    onReset();
  };

  const onReset = () => {
    form.resetFields();
  };

  const onFieldsChange = () => {
    setDisabledButton(false);
  };

  const uniqueGradesOptions = [];
  companyStructure?.map((item) => {
    if (uniqueGradesOptions.find((i) => i === item.grade)) {
    // if (uniqueGradesOptions.find((i) => i === item.level)) {
      return;
    } else {
      uniqueGradesOptions.push(item.grade);
      // uniqueGradesOptions.push(item.level);
    }
  });

  const optionGrades = []

  uniqueGradesOptions.map((item) => {
    if (item !== null) {optionGrades.push({
      value: item,
      label: item,
    });}
  });

  const uniqueTimezoneOptions = [];
  companyStructure?.map((item) => {
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
  companyDiagram?.departments.map((item) => {
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
        onFieldsChange={onFieldsChange}
        onReset={onReset}
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
            placeholder="Все грейды"
            onChange={props.handleGradeChange}
            options={optionGrades}
          />
        </Form.Item>
        <h4 className={styles.filter_panel_point}>Локация</h4>
        <Form.Item name={"Все локации"}>
          <Select
            className={styles.filter_panel_select}
            placeholder="Все локации"
            onChange={props.handleLocationeChange}
            options={optionTimezones}
          />
        </Form.Item>
        <h4 className={styles.filter_panel_point}>Отделы</h4>
        <Form.Item name={"Все отделы"}>
          <Select
            className={styles.filter_panel_select}
            placeholder="Все отделы"
            onChange={props.handleDepartmentChange}
            options={optionDepartments}
          />
        </Form.Item>

        <Button
          className={styles.filter_panel_button_reset}
          htmlType="reset"
          type="primary"
          onClick={handleFormReset}
          disabled={disabledButton}
        >
          Сбросить фильтры
        </Button>
      </Form>
    </div>
  );
}

export default FilterPanel;
