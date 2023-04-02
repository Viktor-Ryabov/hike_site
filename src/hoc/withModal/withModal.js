import Modal from "../../components/Modal/Modal";

export const withModal = (WrappedComponent) => (props) => {
    // console.log(props);
    return (<>
        <Modal {...props} >
            <WrappedComponent {...props} />
        </Modal>
        
    </>)
};