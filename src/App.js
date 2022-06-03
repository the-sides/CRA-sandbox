import { useState } from "react";
import "./App.css";
import cn from "classnames";

import Modal from "./Modal";

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = (e) => {
    setModalOpen(true);
  };
  const closeModal = (e) => {
    setModalOpen(false);
  };

  const modalProps = {
    modalOpen,
    closeModal
  };
  return (
    <main className={cn("container relative", { "modal-is-open": modalOpen })}>
      <Modal {...modalProps} />
      <header>
        <nav>
          <a href="#home">Home</a>
        </nav>
      </header>
      <div className="product__container">
        <button onClick={openModal} className="open-modal">
          Watch Ad
        </button>
        <div className="flex flex-row">
          <img
            src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b7d9211c-26e7-431a-ac24-b0540fb3c00f/air-force-1-07-mens-shoes-5QFp5Z.png"
            alt="Product Feature asdpfoi"
            className="product__image"
          />
          <div className="product__details-container">
            <h1>Product Title</h1>
            <p>Description</p>
            <button type="button" aria-label="Don't Modal">
              Gift Now
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
