import { useState } from "react";
import "./index.scss";
import { Modal } from "./components/modal";

function App() {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <div className="App">
      <button onClick={openModal} className="open-modal-btn">
        ✨ Открыть окно
      </button>
      <Modal open={open} closeModal={closeModal}>
        <img src="https://media2.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif" />
      </Modal>
    </div>
  );
}

export default App;
