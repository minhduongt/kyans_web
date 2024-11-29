import Dialog from 'rc-dialog';
import 'rc-dialog/assets/index.css';

const Modal = ({ visible, onClose, title, children, ...props }) => (
  <Dialog
    visible={visible}
    onClose={onClose}
    forceRender={true}
    title={title}
    center={true}
    className="w-screen max-w-[1300px]"
    classNames={{
      wrapper: 'overflow-hidden',
      content: 'max-h-[calc(100vh-100px)]',
    }}
    {...props}
  >
    {children}
  </Dialog>
);

export default Modal;
