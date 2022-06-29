import React from 'react';
import '../../components/Modal/Modal.scss';

export default function Modal({active, setActive, children}) {
  return (
    <div
     className={active ? "modal active" : "modal"}
     onClick={() => setActive(false)}>
        <div className={active ? "modal_wrapper active" : "modal_wrapper"}
        onClick={e => e.stopPropagation()}>
            {children}
        </div>
    </div>
  )
}
