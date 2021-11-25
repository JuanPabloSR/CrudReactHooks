import React, { useState } from "react";
import UserTable from "./components/UserTable";
import { v4 as uuidv4 } from "uuid";
import AddUserForm from "./components/AddUserForm";

const App = () => {
  const UserData = [
    { id: uuidv4(), name: "Juanito", username: "toromax" },
    { id: uuidv4(), name: "ivoncita", username: "coffee" },
    { id: uuidv4(), name: "kevincito", username: "nigga" },
  ];

  //state
  const [users, setUsers] = useState(UserData);

  //agregar nuevo usuario
  const addUser = (user) => {
    user.id = uuidv4();
    setUsers([...users, user]);
  };

  //eliminar usuario
  const deleteUser = (id) => {
    const arrayFiltrado = users.filter((user) => user.id !== id);

    setUsers(arrayFiltrado);
  };

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
          <AddUserForm addUser={addUser} />
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
};

export default App;
