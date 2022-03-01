import React, { useState } from "react";

import Card from "./UI/Card";
import Button from "./UI/Button";

import classes from "./UserForm.module.css";

const UserForm = (props) => {
  const [enteredUsername, setEnteredUsername] = useState("");
  const [enteredAge, setEnteredAge] = useState("");
  const [errLog, setErrLog] = useState();

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      setErrLog({
        title: "Invalid input",
        message: "please enter valid username and age (no empty inputs)",
      });
      props.pickErrLog(errLog);
      return;
    }
    if (+enteredAge < 1) {
      setErrLog({
        title: "Invalid age",
        message: "User must be at least 1 year old",
      });
      props.pickErrLog(errLog);
      return;
    }

    props.onAddUser(enteredUsername, enteredAge);
    setErrLog(undefined);
    setEnteredUsername("");
    setEnteredAge("");
  };

  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  return (
      
    <Card className={classes["user-form"]}>
      <form onSubmit={addUserHandler}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            className="input"
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="age">Age (years)</label>
          <input
            className="input"
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
        </div>
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default UserForm;
