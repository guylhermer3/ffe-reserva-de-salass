import classNames from "classnames";
import styles from "./styles.module.css";

export default function Mensagem({ type, children }) {
    const classes = classNames({
        [styles.mensagemContent]: true,
        [styles.mensagemSuccess]: type === "success",
        [styles.mensagemError]: type === "error",
    });

    return (
        <div className={classes}>
            <p>{children}</p>
        </div>
    );
}