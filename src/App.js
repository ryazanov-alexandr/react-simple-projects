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
        <img src="https://media.giphy.com/media/xT77XZrTKOxycjaYvK/giphy.gif?cid=790b76111fuvay81cmbpg0i9ecrqhy24qy4kq4lzye7ogo3l&ep=v1_gifs_search&rid=giphy.gif&ct=g" />
      </Modal>
    </div>
  );
}

export default App;
