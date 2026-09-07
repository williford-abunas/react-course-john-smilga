import { FaTimes } from "react-icons/fa"
import { useGlobalContext } from "../contexts/context"
  
const Modal = () => {
  const { isModalOpen, closeModal } = useGlobalContext()

  return (
    <div className={isModalOpen ? "modal-overlay show-modal" : "modal-overlay"}>
      <div className="modal-container">
        <h3>Modal Title</h3><p>Modal content goes here.</p>
        <button className="close-modal-btn" onClick={closeModal}><FaTimes /></button>
      </div>
    </div>
  )
}

export default Modal