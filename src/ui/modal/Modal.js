import classes from './Modal.module.css';
import { createPortal } from 'react-dom';
import Posts from '../../components/posts/Posts';
import { ReactComponent as MarkedIcon } from '../../assets/icons/marked.svg';
import img from '../../assets/images/img1.png';

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.onCloseCart} />;
};

const ModalOverlay = ({ active, setActive }) => {
  return (
    <>
      <div className={classes.modal} onClick={() => setActive(false)}>
        <MarkedIcon />
        <div>
          <h1>3 актуальных поста Moriah.Stanton</h1>
          <Posts />
        </div>
      </div>
    </>
  );
};

const portalElement = document.getElementById('overlays');

const Modal = (props) => {
  return (
    <>
      {createPortal(
        <Backdrop onCloseCart={props.onCloseCart} />,
        portalElement
      )}

      {createPortal(
        <ModalOverlay>{props.children} </ModalOverlay>,
        portalElement
      )}
    </>
  );
};

export default Modal;
