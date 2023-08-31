import './ModalEditProduct.css';
import Modal from 'react-bootstrap/Modal';

const ModalEditProduct = ({ show, handleClose }) => {
    return (
        <Modal className='modalAdd' show={show}>
            <Modal.Header closeButton onHide={handleClose}>
                <Modal.Title>Edit product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Category
            </Modal.Body>
        </Modal>
    );
};

export default ModalEditProduct;