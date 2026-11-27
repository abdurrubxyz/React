import { useState } from "react";
import "./App.css";
import Feedback from "./components/Feedback";
import Profile from "./components/Profile";
import userContext from "./userContext";

const App = () => {
  const [feedback, setFeedback] = useState([
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

  const deleteFeedback = (id) => {
    setFeedback(feedback.filter((item) => item.id !== id));
  };

  return (
    <>
      <Feedback feedback={feedback} deleteitem={deleteFeedback} />

      <userContext.Provider value="abdurrub">
        <Profile />
      </userContext.Provider>
    </>
  );
};

export default App;
