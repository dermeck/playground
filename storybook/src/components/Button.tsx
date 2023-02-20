import React, { HTMLAttributes, ReactNode } from "react";
import styles from "./button.module.css";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant: "primary" | "secondary";
}

export const Button = ({ children, variant, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={variant === "primary" ? styles.primary : styles.secondary}
    >
      {children}
    </button>
  );
};
