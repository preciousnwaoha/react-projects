import React from "react";

import Card from "./UI/Card";
import Button from "./UI/Button";
import Wrapper from "./Helpers/Wrapper"
import classes from "./ErrorModal.module.css";

const ErrorModal = (props) => {
  const okButtonHandler = (event) => {
    props.pickErrLog(undefined);
  };


  return (
    <Wrapper>
        <div className={classes.backdrop} onClick={okButtonHandler}></div>
      <Card className={classes.modal}>
        <header>
          <h2>{props.title}</h2>
        </header>

        <p>{props.message}</p>
        <footer>
          <Button
            className="modal__button"
            type="button"
            onClick={okButtonHandler}
          >
            Okay
          </Button>
        </footer>
      </Card>
    </Wrapper>
  );
};

export default ErrorModal;
