'use client';

import { useForm } from "react-hook-form";


export function LoginForm() {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  return (
    <div className="space-y-4">
      <input type="text" placeholder="Email Addres" className="block text-sm py-3 px-4 rounded-lg w-full border outline-blue-500" />
      <input type="text" placeholder="Password" className="block text-sm py-3 px-4 rounded-lg w-full border outline-blue-500" />
      <button className="w-full py-2 text-xl text-white bg-blue-400 rounded-lg hover:bg-blue-500 transition-all">Ingresar</button>
    </div>
  )
}
