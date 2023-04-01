import Modal from "../../components/Modal/Modal";
import PropTypes from "prop-types";

export const withModal = (WrappedComponent) => (props) => {
    // console.log(props);
    return (<>
        <Modal {...props} >
            <WrappedComponent {...props} />
        </Modal>
        
    </>)
};