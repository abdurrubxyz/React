import { useState } from "react";
import "./App.css";
import Hello from "./components/Hello";
import Header from "./components/Header";
import Feedback from "./components/Feedback";

const App = () => {
  const name = "abdurrub";

  let users = [
    { id: 1, text: "text-1" },
    { id: 2, text: "text-2" },
    { id: 3, text: "text-3" },
  ];

  let showUsers = true;

  const [feedback, serFeedback] = useState([
    {
      id: 1,
      text: "this is text 1",
    },
    {
      id: 2,
      text: "this is text 2",
    },
    {
      id: 3,
      text: "this is text 3",
    },
  ]);

  return (
    <>
      {/* expressions */}
      {/* <h1>{name}</h1>
      <h2>{5 + 5}</h2> */}

      {/* <h2>User Lenght : {users.length}</h2> */}

      {/* if else & map*/}
      {/* {showUsers ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>{user.text}</li>
          ))}
        </ul>
      ) : null} */}

      {/* Component callign & Inside using props */}
      <Header text="Logo" bgColor="green" textColor="#ffffff" />
      <Header text="Logo 2" bgColor="red" textColor="blue" />
      <Header />
      <Feedback feedback={feedback}/>
      {/* <Hello
        title="abdurrub"
        para=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit nam
          minima aut eius earum, nesciunt voluptatum laboriosam illum quaerat
          explicabo nihil ea delectus similique pariatur nulla suscipit mollitia
          accusamus dicta!"
      />
      <Hello
        title="abdurrub"
        para=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit nam
          minima aut eius earum, nesciunt voluptatum laboriosam illum quaerat
          explicabo nihil ea delectus similique pariatur nulla suscipit mollitia
          accusamus dicta!"
      />
      <Hello
        title="abdurrub"
        para=" Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit nam
          minima aut eius earum, nesciunt voluptatum laboriosam illum quaerat
          explicabo nihil ea delectus similique pariatur nulla suscipit mollitia
          accusamus dicta!"
      /> */}
    </>
  );
};

export default App;
