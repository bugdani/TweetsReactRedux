import React, { useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { validationFormAddTweetAction } from "../../actions/validationActions";
import { addTweetActions } from "../../actions/tweetActions";
import { openClosedAddTweetModalAction } from "../../actions/modalActions";
import uuid from "uuid/v4";
import moment from "moment";

export default function FormAddTweet() {
  const [formValue, setFormValue] = useState({
    name: "",
    tweet: "",
  });

  //Inicializacion de los dispatch y ejecucion de las acciones
  const dispatch = useDispatch();
  const errorForm = (state) => dispatch(validationFormAddTweetAction(state));
  const addTweet = (state) => dispatch(addTweetActions(state));
  const closeModal = (state) => dispatch(openClosedAddTweetModalAction(state));

  const errorFormValue = useSelector(
    (state) => state.validation.errorFormAddTweet
  );

  const onChange = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const { name, tweet } = formValue;
    if (!name || !tweet) {
      errorForm(true);
    } else {
      errorForm(false);
      addTweet({
        id: uuid(),
        name,
        tweet,
        date: moment(),
      });
      closeModal(false);
    }
  };

  return (
    <Form className="m-3" onChange={onChange} onSubmit={onSubmit}>
      <Form.Group>
        <h1>Nuevo Tweet</h1>
      </Form.Group>
      <Form.Group>
        <Form.Control type="text" name="name" placeholder="Ingresa tu nombre" />
      </Form.Group>
      <Form.Group>
        <Form.Control
          as="textarea"
          name="tweet"
          row="3"
          placeholder="Ingresa tu tweet"
        />
      </Form.Group>
      <Button varian="primary" type="onSubmit">
        Enviar Tweet
      </Button>
      {errorFormValue && (
        <Alert variant="danger" className="mt-4">
          Todos los campos son obligatorios
        </Alert>
      )}
    </Form>
  );
}
