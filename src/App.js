import { useState } from "react";
import UserForm from "./components/UserForm";

function App() {
  const [users, setUsers] = useState([]);

  const onUserAdd = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div>
      <UserForm onUserAdd={onUserAdd} />
    </div>
  );
}

export default App;
