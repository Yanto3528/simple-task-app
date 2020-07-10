import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { motion } from "framer-motion";
import { GrClose } from "react-icons/gr";

import Backdrop from "../../styles/shared/Backdrop";
import Card from "../../styles/shared/Card";
import Button from "../../styles/shared/Button";
import Divider from "../../styles/shared/Divider";
import { ModalContainer } from "./styles";
import { backdropVariants, modalVariants } from "./variants";

const iconStyles = {
  position: "absolute",
  top: "20px",
  right: "20px",
  cursor: "pointer",
};

const modalRoot = document.createElement("div");
modalRoot.setAttribute("id", "modal-root");
document.body.appendChild(modalRoot);

// Di sini saya menggunakan Portal untuk modal supaya ketika styling untuk positionnya tidak bentrok dengan parent lainnya
const Modal = ({ title, content, onConfirm, onClose, children }) => {
  const el = document.createElement("div");
  useEffect(() => {
    modalRoot.appendChild(el);

    return () => {
      modalRoot.removeChild(el);
    };
  }, []);
  const handleClose = (e) => {
    e.stopPropagation();
  };

  return ReactDOM.createPortal(
    <Backdrop
      onClick={onClose}
      variants={backdropVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      data-testid="modal"
    >
      <motion.div
        style={{ width: "600px", maxWidth: "90%" }}
        variants={modalVariants}
      >
        <Card onClick={handleClose}>
          <ModalContainer>
            <h3>{title}</h3>
            <Divider />
            <form onSubmit={onConfirm} data-testid="submit">
              {content ? content : children}
              <div className="button-group">
                <Button type="button" cancel onClick={onClose}>
                  Cancel
                </Button>
                <Button type="submit">Confirm</Button>
              </div>
            </form>
            <GrClose
              data-testid="close-icon"
              style={iconStyles}
              onClick={onClose}
            />
          </ModalContainer>
        </Card>
      </motion.div>
    </Backdrop>,
    document.getElementById("modal-root")
  );
};

export default Modal;
