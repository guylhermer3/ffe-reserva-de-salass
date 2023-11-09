import styles from "./styles.module.css";
import classNames from "classnames";

export default function Tr({ children, center, left, right, ...props }) {
  const classes = classNames(styles.tr, {
    [styles.center]: center,
    [styles.right]: right,
    [styles.left]: left,
  });

  return <tr className={classes} {...props}>{children}</tr>;
}