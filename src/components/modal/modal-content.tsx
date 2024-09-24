import { motion } from 'framer-motion'
import type { HTMLAttributes } from 'react'
type ModalContentProps = HTMLAttributes<HTMLDivElement> & {
  handleClose?: () => void
  ariaLabel?: string
}

const effect = {
  hidden: {
    y: '-100vh',
    opacity: 0,
  },
  visible: {
    y: '0',
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 600,
      damping: 30,
    },
  },
  exit: {
    y: '100vh',
    opacity: 0,
  },
}

export function ModalContent({
  className,
  children,
  handleClose,
  ariaLabel,
}: ModalContentProps) {
  return (
    <motion.div
      tabIndex={-1}
      role="dialog"
      aria-modal={true}
      aria-label={ariaLabel}
      className={`relative ${className || 'bg-white m-5 rounded-lg p-5 shadow-lg'}`}
      variants={effect}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={(event) => event.stopPropagation()}
    >
      {children}
      {handleClose && (
        <button
          className="absolute right-0 top-0 p-2"
          onClick={handleClose}
          aria-label={`Close ${ariaLabel || 'dialog'}`}
        >
          <svg
            className="h-6 w-6"
            fill="#fff"
            viewBox="0 0 512 512"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M289.94 256l95-95A24 24 0 00351 127l-95 95-95-95a24 24 0 00-34 34l95 95-95 95a24 24 0 1034 34l95-95 95 95a24 24 0 0034-34z" />
          </svg>
        </button>
      )}
    </motion.div>
  )
}
