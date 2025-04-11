import React, { useEffect, useState } from "react";
import styles from "./answer.module.css";
import Markdown from "react-markdown";

interface AnswerProps {
  text: string;
}

export const Answer: React.FC<AnswerProps> = ({ text }) => {
  return (
    <div className={`${styles.answer} ${text ? 'bg-[#F8F8FA]' : ''} rounded-3xl p-8 -ml-8 -mr-8`}>
      <Markdown>{text}</Markdown>
    </div>
  );
};
