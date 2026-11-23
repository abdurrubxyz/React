import React, { useReducer } from "react";

const App = () => {

  const name = "abdurrub";

  let users = [
    {id:1,text:"text-1"},
    {id:2,text:"text-2"},
    {id:3,text:"text-3"}
  ]

  let showUsers = true;

  return (
    <div>
      <h1>{name}</h1>
      <h2>{5 + 5}</h2>
      <h2>User Lenght : {users.length}</h2>
      {showUsers ? ( <ul>
        {users.map((user) => (
          <li key={user.id}>{user.text}</li>
        ))}
      </ul>) : null}
    </div>
  );
};

export default App;
