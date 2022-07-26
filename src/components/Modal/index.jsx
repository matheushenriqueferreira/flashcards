import React from "react";
import { useNavigate } from "react-router-dom";

export const Modal = ({title, text}) => {
  const navigate = useNavigate();

  return(
    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content" style={{background: '#2D294C'}}>
          <div className="modal-header" style={{background: '#413D5D', borderColor: '#615b86'}}>
            <h5 className="modal-title" id="staticBackdropLabel">{title}</h5>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <span>{text}</span>
          </div>
          <div className="modal-footer" style={{borderColor: '#615b86'}}>
            <button type="button" className="btn btn-primary">Sim</button>
            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
          </div>
        </div>
      </div>
    </div>
  );
}