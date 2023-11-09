import styles from "./styles.module.css";
import classNames from "classnames";

export default function Th({ children, center, left, right, ...props }) {
  const classes = classNames(styles.th, {
    [styles.center]: center,
    [styles.right]: right,
    [styles.left]: left,
  });

  return <th className={classes} {...props}>{children}</th>;
}