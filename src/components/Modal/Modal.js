import React from "react";
import { Modal as ModalB } from "react-bootstrap";
import { combineReducers } from "redux";
import { useDispatch, useSelector } from "react-redux";
import { openClosedAddTweetModalAction } from "../../actions/modalActions";

export default function Modal(props) {
  const { children } = props;

  //Dispatch para enviar nuestras acciones redux
  const dispatch = useDispatch();
  const closeModal = (state) => dispatch(openClosedAddTweetModalAction(state));

  //useSelector para acceder a un valor en el store
  const isOpenModal = useSelector((state) => state.modal.stateModalAddTweet);

  return (
    <ModalB
      show={isOpenModal}
      size="lg"
      centered
      onHide={() => closeModal(false)}
    >
      {children}
    </ModalB>
  );
}
