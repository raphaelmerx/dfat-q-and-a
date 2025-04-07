import React, { useEffect, useState } from "react";
import styles from "./answer.module.css";
import Markdown from "react-markdown";

interface AnswerProps {
  text: string;
}

export const Answer: React.FC<AnswerProps> = ({ text }) => {
  return (
    <div className={styles.answer}>
      <Markdown>{text}</Markdown>
    </div>
  );
};
