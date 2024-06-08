import React from "react";
import styles from "./Feedback.module.scss";

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
  return (
    <div>
      {options.map((option) => (
        <button
          key={option}
          className={`${styles.button} ${styles[option]}`}
          onClick={() => onLeaveFeedback(option)}>
          {option.charAt(0).toUpperCase() + option.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default FeedbackOptions;
