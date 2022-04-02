import ReactDOM from 'react-dom';
import { createPortal } from 'react-dom';
import { ReactComponent as MarkedIcon } from '../../assets/icons/marked.svg';
import Posts from '../../components/posts/Posts';
import classes from './Modal.module.css';

const Backdrop = ({ onClose }) => {
  return <div className={classes.backdrop} onClick={onClose} />;
};

const ModalOverlay = ({ name }) => {
  return (
    <div className={classes.modal}>
      <MarkedIcon />
      <div className={classes.title}>
        <h1>3 актуальных поста {name}</h1>
        <Posts />
      </div>
      <MarkedIcon />
    </div>
  );
};

const Modal = ({ children, name, onClose }) => {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={onClose} />,
        document.getElementById('backdrop-root')
      )}

      {createPortal(
        <ModalOverlay name={name}>{children} </ModalOverlay>,
        document.getElementById('overlays')
      )}
    </>
  );
};

export default Modal;
