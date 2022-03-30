import classes from './Modal.module.css';
import ReactDOM from 'react-dom';
import { createPortal } from 'react-dom';
import Posts from '../../components/posts/Posts';
import { ReactComponent as MarkedIcon } from '../../assets/icons/marked.svg';

const Backdrop = ({ onClose }) => {
  return <div className={classes.backdrop} onClick={onClose} />;
};

const ModalOverlay = ({ onClose, user }) => {
  return (
    <div className={classes.modal}>
      <MarkedIcon />
      <div className={classes.title}>
        <h1>3 актуальных поста {user}</h1>
        <Posts />
      </div>
      <button className={classes.btn} onClick={onClose}>
        X
      </button>
    </div>
  );
};

const Modal = ({ children }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById('backdrop-root')
      )}

      {createPortal(
        <ModalOverlay>{children} </ModalOverlay>,
        document.getElementById('overlays')
      )}
    </>
  );
};

export default Modal;
