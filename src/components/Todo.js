import { useState } from "react";
import Backdrop from "./Backdrop";
import Modal from "./Modal";

function Todo(props) {
  const [modalOpen, setmodalOpen] = useState(false);

  function openHandle() {
    setmodalOpen(true);
  }

  function closeHandle() {
    setmodalOpen(false);
  }
  return (
    <div className="card">
      <h2>{props.title}</h2>
      <div className="actions">
        <span>CardJS</span>
        <button className="btn" onClick={openHandle}>
          Open
        </button>
      </div>
      {modalOpen && <Modal onClick={closeHandle} />}
      {modalOpen && <Backdrop onClick={closeHandle} />}
    </div>
  );
}

export default Todo;
