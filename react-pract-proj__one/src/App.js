import React, { useState } from "react";


import UserForm from "./components/UserForm";
import UserList from "./components/UserList";

import ErrorModal from "./components/ErrorModal";

const App = () => {
  const [usersList, setUsersList] = useState([]);
  const [errMessage, setErrMessage] = useState();

  const errChangeHandler = (value) => {
    setErrMessage(value);
  };

  const addUserHandler = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { name: uName, age: uAge, id: Math.random().toString() },
      ];
    });
  };

  return (
    <React.Fragment>
      <header
        style={{
          display: "inline-block",
          width: "100%",
          color: "#fafafa",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            display: "inline-block",
            color: "#fafafa",
            fontSize: "1.5rem",
            margin: "1rem",
          }}
        >
          Valid Lists
        </h1>
      </header>

      <UserForm onAddUser={addUserHandler} pickErrLog={errChangeHandler} />
      <UserList users={usersList} />
      {errMessage && (
        <ErrorModal
          title={errMessage.title}
          message={errMessage.message}
          pickErrLog={errChangeHandler}
        />
      )}
    </React.Fragment>
  );
};

export default App;
