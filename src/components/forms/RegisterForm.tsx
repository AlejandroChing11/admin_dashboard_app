'use client';

import { User } from "@/interfaces";
import { useForm } from "react-hook-form";
import { FormInput } from "./FormInput";
import { useState } from "react";

import API from "@/services/API";
import { useRouter } from "next/navigation";

export function RegisterForm() {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<User>();

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (data: User) => {

    try {
      setIsLoading(true);
      setError(null);

      const response = await API.register(data);

      console.log('Usuario registrado', response);

      reset();
      router.push('/login');


    } catch (error: any) {
      setError(error.message);
    } finally {
      setIsLoading(false);
    }

  }


  return (
    <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
      <form className="bg-white p-10" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-gray-800 font-bold text-2xl mb-1 text-center">Regístrate a WePlot</h1>
        <p className="text-sm font-normal text-gray-600 mb-7 text-center">Diligencia el formulario</p>

        <div className="flex flex-wrap -mx-2">
          {/* Nombre y Apellido */}
          <div className="w-1/2 px-2">
            <FormInput
              name="nombre"
              isRequired
              label="Nombre"
              register={register}
              error={errors.nombre?.message}
            />
          </div>
          <div className="w-1/2 px-2">
            <FormInput
              name="apellido"
              label="Apellido"
              register={register}
              error={errors.apellido?.message}
            />
          </div>

          {/* Email y Teléfono */}
          <div className="w-1/2 px-2">
            <FormInput
              name="email"
              isRequired
              label="Email"
              register={register}
              error={errors.email?.message}
            />
          </div>
          <div className="w-1/2 px-2">
            <FormInput
              name="telefono"
              label="Teléfono"
              isRequired
              register={register}
              error={errors.telefono?.message}
            />
          </div>

          {/* País */}
          <div className="w-full px-2">
            <FormInput
              name="pais"
              label="País"
              register={register}
              error={errors.pais?.message}
            />
          </div>

          {/* Comida y Artista Favorito */}
          <div className="w-1/2 px-2">
            <FormInput
              name="comidaFavorita"
              label="Comida Favorita"
              register={register}
              error={errors.comidaFavorita?.message}
            />
          </div>
          <div className="w-1/2 px-2">
            <FormInput
              name="artistaFavorito"
              label="Artista Favorito"
              register={register}
              error={errors.artistaFavorito?.message}
            />
          </div>

          {/* Lugar y Color Favorito */}
          <div className="w-1/2 px-2">
            <FormInput
              name="lugarFavorito"
              label="Lugar Favorito"
              register={register}
              error={errors.lugarFavorito?.message}
            />
          </div>
          <div className="w-1/2 px-2">
            <FormInput
              name="colorFavorito"
              label="Color Favorito"
              register={register}
              error={errors.colorFavorito?.message}
            />
          </div>

          {/* Contraseña y Confirmar Contraseña */}
          <div className="w-1/2 px-2">
            <FormInput
              name="password"
              label="Contraseña"
              isRequired
              register={register}
              error={errors.password?.message}
              type="password"
            />
          </div>
          <div className="w-1/2 px-2">
            <FormInput
              name="confirmarContraseña"
              label="Confirmar Contraseña"
              isRequired
              register={register}
              error={errors.confirmarContraseña?.message}
              type="password"
            />
          </div>
        </div>

        <button type="submit" className="block w-full bg-indigo-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2">Registrarse</button>
        <div
          className="flex justify-center items-center"
        >
          <span className="text-sm text-slate-700">
            ¿Ya tienes cuenta?
            <span className="text-blue-500 ml-2 cursor-pointer">Inicia sesión</span>
          </span>
        </div>
      </form>
    </div>
  )
}
