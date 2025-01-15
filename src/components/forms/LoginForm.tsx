"use client";

import { useState } from 'react';
import { LoginData } from "@/interfaces";
import API from "@/services/API";
import Link from "next/link";
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
  const [authError, setAuthError] = useState<string | null>(null);

  const onSubmit = async (data: LoginData) => {
    try {
      const response = await API.login(data);

      if (response?.token) {
        localStorage.setItem("token", response?.token);
        reset();
        router.push("/Perfil");
      } else {
        setAuthError("La contraseña o el email es incorrecto");
      }

    } catch (error: any) {
      console.error(error.message);
      setAuthError("La contraseña o el email es incorrecto"); 
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div>
        <label
          htmlFor="email"
          className="block text-slate-500 text-sm font-semibold mb-2"
        >
          Email
        </label>
        <input
          type="text"
          placeholder="Email"
          className="block text-sm py-3 px-4 text-slate-600 rounded-lg w-full border outline-blue-500"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span className="text-red-500">Este campo es obligatorio</span>
        )}
      </div>
      <div>
        <label
          htmlFor="password"
          className="block text-slate-500 text-sm font-semibold mb-2"
        >
          Contraseña
        </label>
        <input
          type="password"
          placeholder="Password"
          className="block text-sm py-3 px-4 text-slate-600 rounded-lg w-full border outline-blue-500"
          {...register("password", { required: true })}
        />
        {errors.password && (
          <span className="text-red-500">Este campo es obligatorio</span>
        )}
        {authError && (
          <p className="text-red-500 mt-2 animate-pulse">
            {authError}
          </p>
        )}
      </div>
      <button
        onClick={handleSubmit(onSubmit)}
        className="w-full py-2 text-xl text-white bg-blue-400 rounded-lg hover:bg-blue-500 transition-all"
      >
        Ingresar
      </button>
      <div className="flex justify-center items-center mt-4">
        <span className="text-sm text-slate-700">
          ¿No tienes cuenta?
          <Link
            className="text-blue-500 ml-2 cursor-pointer"
            href={"/register"}
          >
            Registrate!
          </Link>
        </span>
      </div>
    </div>
  );
}
