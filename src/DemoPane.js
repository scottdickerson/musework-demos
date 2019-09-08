import React from "react";
import PropTypes from "prop-types";
import styles from "./DemoPane.module.css";

const propTypes = {
  /* Image to show in the pane*/
  img: PropTypes.string.isRequired,
  /** onClick function to call back on */
  onClick: PropTypes.string.isRequired
};

const DemoPane = ({ img, onClick }) => (
  <div className={styles.demoPane} onClick={onClick}>
    <img alt="Demo" src={img} />
  </div>
);

DemoPane.propTypes = propTypes;
export default DemoPane;
