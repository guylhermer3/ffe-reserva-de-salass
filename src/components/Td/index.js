import styles from "./styles.module.css";
import classNames from "classnames";

export default function Td({ children, left, right, ...props }) {
  const classes = classNames(styles.td, {
    [styles.right]: right,
    [styles.left]: left,
  });

  return <td className={classes} {...props}>{children}</td>;
}