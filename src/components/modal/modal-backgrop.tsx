import { motion } from 'framer-motion'
import type { HTMLAttributes } from 'react'

type BackdropProps = HTMLAttributes<HTMLDivElement> & {
  handleClose?: () => void
}

export function Backdrop({ children, handleClose }: BackdropProps) {
  return (
    <motion.div
      className="bg-backdrop fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm backdrop-filter"
      onClick={handleClose}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {children}
    </motion.div>
  )
}
