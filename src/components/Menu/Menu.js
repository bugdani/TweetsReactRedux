import React from "react";
import { Container, Navbar, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { openClosedAddTweetModalAction } from "../../actions/modalActions";

import LogoRedux from "../../assets/img/original.png";
export default function Menu() {
  //Dispath para ejecutar accion de redux
  const dispath = useDispatch();
  const openClosedAddTweetModal = (state) =>
    dispath(openClosedAddTweetModalAction(state));

  const openModal = () => {
    openClosedAddTweetModal(true);
  };
  return (
    <Navbar bg="dark" variant="darl=k">
      <Container>
        <Navbar.Brand>
          <img
            alt="tweets"
            src={LogoRedux}
            width="30"
            height="30"
            className="d-inline-block align-top mr-4"
          />
        </Navbar.Brand>
        <h3>Tweet Simulator Redux</h3>
        <Button variant="outline-success" onClick={openModal}>
          Nuevo Tweet
        </Button>
      </Container>
    </Navbar>
  );
}
