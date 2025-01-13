'use client';

import { LoginData } from "@/interfaces";
import API from "@/services/API";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";


export function LoginForm() {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginData>();

  const router = useRouter();

  const onSubmit = async (data: LoginData) => {

    console.log(data);

    try {
      const response = await API.login(data);
      localStorage.setItem('token', response.token);
      reset();
      router.push('/');

    } catch (error: any) {
      console.error(error.message);
    }

  }


  return (
    <div className="space-y-4">
      <input
        type="text"
        placeholder="Email"
        className="block text-sm py-3 px-4 text-slate-600 rounded-lg w-full border outline-blue-500"
        {...register("email", { required: true })}
      />
      {errors.email && <span className="text-red-500">Este campo es obligatorio</span>}
      <input
        type="password"
        placeholder="Password"
        className="block text-sm py-3 px-4 text-slate-600 rounded-lg w-full border outline-blue-500"
        {...register("password", { required: true })}
      />
      {errors.password && <span className="text-red-500">Este campo es obligatorio</span>}
      <button
        onClick={handleSubmit(onSubmit)}
        className="w-full py-2 text-xl text-white bg-blue-400 rounded-lg hover:bg-blue-500 transition-all"
      >Ingresar</button>
    </div>
  )
}
