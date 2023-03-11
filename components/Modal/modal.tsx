import { ReactFragment, ReactElement, JSXElementConstructor } from "react";
import styles from "./modal.module.scss";

const Modal = (props: {
  action: (arg0: boolean) => void;
  message:
    | string
    | number
    | boolean
    | ReactFragment
    | ReactElement<any, string | JSXElementConstructor<any>>
    | null
    | undefined;
}) => {
  console.log(props);
  const closeModal = () => {
    props.action(false);
  };
  return (
    <div className={styles.modal}>
      <div
        className={styles.modal__header}
        style={{
          backgroundColor:
            props.message === "Message correctement envoyé" ? "green" : "red",
        }}
      >
        <span>
          <i className="pi pi-times" onClick={() => closeModal()}></i>
        </span>
      </div>
      <p className={styles.modal__message}>{props.message}</p>
    </div>
  );
};

export default Modal;
