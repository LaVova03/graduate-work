import './ModalTableConfirm.css';

const ModalTableConfirm = ({ modalShow, deleteItem, closeModal }) => {
    return (
        <div className={modalShow ? "modal_show" : "modal_close"} >
            <p className='question'>Are u sure you want to delete this product?</p>
            <button className='cancel' onClick={closeModal}>Cancel</button>
            <button className='delete' onClick={deleteItem}>Delete</button>
        </div>
    );
};

export default ModalTableConfirm;