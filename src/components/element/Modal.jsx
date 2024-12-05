import { cn } from '@/utils';
import Dialog from 'rc-dialog';
import 'rc-dialog/assets/index.css';
import CloseIcon from '../../icons/close.svg';

const Modal = ({
  visible,
  onClose,
  title,
  children,
  className,
  classNames,
  ...props
}) => (
  <Dialog
    visible={visible}
    onClose={onClose}
    forceRender={true}
    title={title}
    center={true}
    className={cn('w-[95%] lg:w-screen lg:max-w-[1300px]', className)}
    classNames={{
      wrapper: '',
      content: '',
      body: 'p-2 lg:p-[20px] relative',
      ...classNames,
    }}
    {...props}
  >
    {children}
    <div
      className="absolute right-[1%] top-[1%] z-10 cursor-pointer lg:hidden"
      onClick={onClose}
    >
      <img src={CloseIcon} className="h-8 w-8" />
    </div>
  </Dialog>
);

export default Modal;
