import React from "react";
import styles from "./DemoFrame.module.css";

const DemoFrame = ({ url, onClose }) => (
  <div className={styles.demoFrame}>
    <h2 onClick={() => onClose()}>Back to Demos</h2>
    <iframe title="Demo Pane" src={url} />
  </div>
);

export default DemoFrame;
