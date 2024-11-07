export const FADE = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};

export const FADE_TRANSITION = {
  initial: {
    opacity: 0,
    visibility: 'hidden',
  },
  animate: {
    opacity: 1,
    visibility: 'visible',
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
    },
  },
};

export const LEFT_ENTER = {
  initial: {
    left: -150,
  },
  animate: {
    left: 0,
    transition: {
      duration: 1,
      ease: 'easeInOut',
    },
  },
};
