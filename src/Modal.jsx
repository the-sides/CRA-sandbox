import cn from "classnames";

const Modal = ({ modalOpen, closeModal }) => {
  return (
    <div className={cn("modal", { "modal--open": modalOpen })}>
      <button
        onClick={closeModal}
        className="modal__backdrop"
        aria-label="Close Modal"
        type="button"
      ></button>
      <div className="modal__video-container">
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/pjsjZwMXaL4"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Modal;
