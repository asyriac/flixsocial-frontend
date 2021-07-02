import { useDispatch } from "react-redux";
import { replyToTweet } from "../postSlice";

const Modal = ({ show, toggleModal, title, handleReplyToTweet, children }) => {
  const dispatch = useDispatch();

  return (
    <div className={`modal ${show ? "show" : ""}`} onClick={(e) => e.stopPropagation()}>
      <div className="modal-content">
        <div className="modal-header">
          <h4 className="modal-title">{title}</h4>
          <div>
            <i className="fas fa-times clickable"></i>
          </div>
        </div>
        <div className="modal-body">{children}</div>
        <div className="modal-footer">
          <div className="modal-footer-buttons gap">
            <button className="btn btn-secondary btn-sm modal-close" onClick={handleReplyToTweet}>
              Reply
            </button>
            <button
              className="btn btn-secondary btn-danger btn-sm modal-close"
              onClick={(e) => {
                e.stopPropagation();
                toggleModal();
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
