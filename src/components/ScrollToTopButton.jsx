/* eslint-disable react-hooks/exhaustive-deps */
import { cn } from '@/utils';
import { useState, useEffect } from 'react';

const ScrollToTopButton = ({ top = 20, smooth = true, ...props }) => {
  const [visible, setVisible] = useState(false);

  function scrollToTop(smooth = true) {
    if (smooth) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    } else {
      document.documentElement.scrollTop = 0;
    }
  }

  const onScroll = () => {
    setVisible(document.documentElement.scrollTop > top);
  };
  useEffect(() => {
    document.addEventListener('scroll', onScroll);
    return () => document.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      onClick={() => scrollToTop(smooth)}
      aria-label="Lên đầu trang"
      className={cn(
        'fixed bottom-6 right-6 z-10 h-fit w-fit rounded-md border-[1px] border-solid border-red-primary bg-orange-primary p-2 transition-all duration-300 hover:bottom-7 hover:opacity-90',
        visible ? 'visible opacity-100' : 'invisible opacity-0',
      )}
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        fill="currentColor"
        class="bi bi-chevron-up text-white"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"
        />
      </svg>
    </button>
  );
};

export default ScrollToTopButton;
