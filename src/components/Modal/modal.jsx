import "./modal.scss";

const Modal = (props) => {
  console.log(props);
  const closeModal = () => {
    props.action(false);
  };
  return (
    <div className="modal">
      <div
        className="modal__header"
        style={{
          backgroundColor:
            props.message === "Message correctement envoyé" ? "green" : "red",
        }}
      >
        <span>
          <i className="pi pi-times" onClick={() => closeModal()}></i>
        </span>
      </div>
      <p className="modal__message">{props.message}</p>
    </div>
  );
};

export default Modal;
