import { AnimatePresence } from 'framer-motion'
import {
  type Dispatch,
  type HTMLAttributes,
  type SetStateAction,
  useEffect,
  useState,
} from 'react'
import { createPortal } from 'react-dom'
import FocusLock from 'react-focus-lock'

import { Backdrop } from '@/components/modal/modal-backgrop'
import { ModalContent } from '@/components/modal/modal-content'

type ModalProps = HTMLAttributes<HTMLDivElement> & {
  isOpen: boolean
  handleClose: () => void
  hideCloseButton?: boolean
  backdropDismiss?: boolean
  onExitComplete?: [
    'fired' | 'completed' | undefined,
    Dispatch<SetStateAction<'fired' | 'completed' | undefined>>,
  ]
  ariaLabel?: string
}

export function Modal({
  children,
  className,
  isOpen,
  handleClose,
  hideCloseButton,
  backdropDismiss = true,
  onExitComplete,
  ariaLabel,
}: ModalProps) {
  const [isBrowser, setIsBrowser] = useState<boolean>(false)
  const [trigger, setTrigger] = onExitComplete ?? [undefined, undefined]

  const handleKeyDown = (event: KeyboardEvent) => {
    if (!isOpen || event.key !== 'Escape') return

    handleClose()
  }

  useEffect(() => {
    if (!isOpen) return

    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = 'auto'
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  useEffect(() => {
    setIsBrowser(true)
  }, [])

  if (!isBrowser) return <></>

  return createPortal(
    <AnimatePresence
      initial={false}
      mode="wait"
      onExitComplete={() =>
        setTrigger && trigger === 'fired' && setTrigger('completed')
      }
    >
      {isOpen && (
        <Backdrop handleClose={backdropDismiss ? handleClose : undefined}>
          <FocusLock>
            <ModalContent
              className={className}
              handleClose={hideCloseButton ? undefined : handleClose}
              ariaLabel={ariaLabel}
            >
              {children}
            </ModalContent>
          </FocusLock>
        </Backdrop>
      )}
    </AnimatePresence>,
    document.getElementById('modal-portal')!,
  )
}
