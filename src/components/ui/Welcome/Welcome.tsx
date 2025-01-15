'use client';

import { useRouter } from 'next/navigation'

export function Welcome() {
  const router = useRouter()

  const handleRedirect = () => {
    router.push('/Perfil')
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        ¡Nice to having you back!
      </h1>
      <button
        onClick={handleRedirect}
        className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 transition duration-300 ease-in-out"
      >
        Go to Dashboard
      </button>
    </div>
  )
}
