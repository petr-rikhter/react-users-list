import "./App.css";
import InputArea from "./InputArea/InputArea";
import { useState } from "react";
import OutputArea from "./OutputArea/OutputArea";

function App() {
  const [users, setUsers] = useState([]);

  const setSaveUsersHandler = (name, age) => {
    setUsers((prevUsers) => {
      const currentListUsers = [...prevUsers];
      currentListUsers.unshift({
        name: name,
        age: age,
        id: Math.random().toString(),
      });
      return currentListUsers;
    });
  };

  return (
    <div>
      <section className="input-form">
        <InputArea onCreateUsers={setSaveUsersHandler}></InputArea>
      </section>

      <section className="output-form">
        <OutputArea users={users}></OutputArea>
      </section>
    </div>
  );
}

export default App;
