import Feedbackitem from "../components/Feedbackitem";

const Feedback = ({ feedback, deleteitem }) => {
  return (
    <div>
      {feedback.map((items) => (
        <Feedbackitem key={items.id} text={items} deleteitem={deleteitem} />
      ))}
    </div>
  );
};

export default Feedback;
