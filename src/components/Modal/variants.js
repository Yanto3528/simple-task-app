// Variants untuk animasi Modal

export const backdropVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
  exit: {
    opacity: 0,
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
};

export const modalVariants = {
  hidden: {
    y: -50,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
  exit: {
    y: -50,
    opacity: 0,
    transition: {
      type: "tween",
      duration: 0.5,
    },
  },
};
