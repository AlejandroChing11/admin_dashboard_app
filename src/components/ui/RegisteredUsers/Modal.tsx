import { ReactNode } from 'react'

type ModalProps = {
  children: ReactNode
  onClose: () => void
}

export function Modal({ children, onClose }: ModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center p-4 z-50">
      <div className="bg-white p-6 rounded-lg max-w-sm w-full max-h-[90vh] overflow-y-auto">
        {children}
        <button
          onClick={onClose}
          className="mt-4 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded w-full"
        >
          Cerrar
        </button>
      </div>
    </div>
  )
}

