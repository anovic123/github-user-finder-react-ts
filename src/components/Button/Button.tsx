import React from "react";

import styles from './Button.module.scss';

interface ButtonProps {
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children }) => {

  return (
    <button className={styles.button}>
      {children}
    </button>
  )
}