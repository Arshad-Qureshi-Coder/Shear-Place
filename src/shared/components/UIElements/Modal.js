// import React from 'react'
// import ReactDOM from 'react-dom'
// import { CSSTransition } from 'react-transition-group'

// import Backdrop from './Backdrop'
// import './Modal.css'

// const ModalOverlay = (props) => {
//     const content = (
        // <div className={`modal ${props.className}`} style={props.style} >
        //     <header className={`modal__header ${props.headerClass}`}>
        //         <h2>{props.header}</h2>
        //     </header>
        //     <form
        //         onSubmit={
        //             props.onSubmit ? props.onSubmit : event => event.preventDefault
        //         }
        //     >
        //         <div className={`modal__content ${props.contentClass}`}>
        //             {props.childern}
        //         </div>
        //         <footer className={`modal__footer ${props.footerClass}`}>
        //             {props.footer}
        //         </footer>
        //     </form>
        // </div>
//     )

//     return ReactDOM.createPortal(content, document.getElementById('modal-hook'));
// }

// const Modal = (props) => {
//   return (
//     <React.Fragment>
//        {props.show && <Backdrop onClikc={props.onClikc} />} 
//        <CSSTransition
//           in={props.show}
//           mountOnEnter
//           unmountOnExit
//           timeout={200}
//           classNames='mpdal'
//           >
//             <ModalOverlay {...props} />
//         </CSSTransition> 
//     </React.Fragment>
//   )
// }

// export default Modal


import React, { forwardRef } from 'react';
import { Modal } from '@mui/material';

import './Modal.css'

const CustomModal = forwardRef((props, ref) => {
  const {
    open,
    onClose,
    className,
    style,
    header,
    headerClass,
    contentClass,
    footerClass,
    footer,
    children,
    onSubmit,
  } = props;

  // console.log('Modal open prop:', open);


  return (
    <Modal open={open} onClose={onClose} ref={ref}>
      <div className={`modal ${className}`} style={style}>
        <header className={`modal__header ${headerClass}`}>
          <h2>{header}</h2>
        </header>
        <form onSubmit={onSubmit ? onSubmit : (event) => event.preventDefault()}>
          <div className={`modal__content ${contentClass}`}>
            {children}
          </div>
          <footer className={`modal__footer ${footerClass}`}>
            {footer}
          </footer>
        </form>
      </div>
    </Modal>
  );
});

export default CustomModal;

