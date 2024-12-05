import '@/styles/components/Modal.scss';
import Modal from '@/components/element/Modal';
import PrimaryButton from '@/components/element/PrimaryButton';
import { useMediaQuery } from '@uidotdev/usehooks';
import { useState } from 'react';

function PartnerWithPreview({ previewContent, children }) {
  const isMobile = useMediaQuery('only screen and (max-width : 768px)');
  const [modalOpen, setModalOpen] = useState(false);

  const handleToggleModal = () => {
    setModalOpen((prev) => !prev);
  };

  return (
    <>
      <div className="flex h-full flex-col items-center justify-between gap-4">
        {children}
        <PrimaryButton
          onClick={handleToggleModal}
          className={
            'flex w-fit min-w-0 max-w-[200px] justify-center whitespace-nowrap px-3 py-1 md:min-w-0 md:px-4 md:py-2'
          }
          textClassName={'text-[9px] md:!text-base w-min font-bold font-inter'}
          label={isMobile ? 'Giới thiệu' : 'Giới thiệu thương hiệu'}
        />
      </div>
      <Modal
        visible={modalOpen}
        onClose={handleToggleModal}
        mask={false}
        closable={false}
        transitionName={{
          enter: 'slide-in-right',
          leave: 'slide-out-right',
        }}
        maskTransitionName={{
          enter: 'fade-in',
          leave: 'fade-out',
        }}
        classNames={{
          wrapper: '',
          content:
            'rounded-[24px] lg:rounded-[70px] border-[10px] border-red-primary border-solid',
        }}
      >
        {previewContent ?? <p>Chưa có giới thiệu về nhà tài trợ này</p>}
      </Modal>
    </>
  );
}

export default PartnerWithPreview;
