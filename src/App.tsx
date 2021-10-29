import React, { useState } from "react";
import "./App.css";
import { Card } from "./components/Card";
import { Input } from "./components/Input";
import { Button } from "@material-ui/core";

interface User {
  name: string;
  age: string;
  hobby: string;
}

function App() {
  const [users, setUsers] = useState<User[]>([] as User[]);
  const [name, setName] = useState<string>("");
  const [age, setAge] = useState<string>("");
  const [hobby, setHobby] = useState<string>("");

  const handleClick = () => {
    const user = { name, age, hobby };
    if (name !== "" && age !== "" && hobby !== "") {
      setUsers([...users, user]);
    }
  };

  return (
    <div className="App">
      <form className="App-header">
        <Input
          placeholder="Patrick"
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="22"
          label="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <Input
          placeholder="Jogar"
          label="Hobby"
          value={hobby}
          onChange={(e) => setHobby(e.target.value)}
        />
        <Button
          sx={{ margin: "5px" }}
          variant="contained"
          onClick={handleClick}
        >
          Submit
        </Button>
        {users.map((user, index) => (
          <Card
            key={index}
            name={user.name}
            age={user.age}
            hobby={user.hobby}
          />
        ))}
      </form>
    </div>
  );
}

export default App;
