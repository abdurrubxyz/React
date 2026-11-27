import React from "react";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const Feedbackitem = ({ text, deleteitem }) => {
  return (
    <>
      <div className="container mt-5 card">
        <div className="card-wrapper">
          <h1>{text.text}</h1>
          <div>
            <div>
              <FaEdit onClick={() => deleteitem(text.id)} />
            </div>
            <div>
              <MdDelete onClick={() => deleteitem(text.id)} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feedbackitem;
