'use client';

import { User } from "@/interfaces";
import { useForm } from "react-hook-form";
import { FormInput } from "./FormInput";


export function RegisterForm() {

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<User>();

  const onSubmit = (data: User) => {
    console.log(data);
    reset();
  }


  return (
    <div className="flex md:w-1/2 justify-center py-10 items-center bg-white">
      <form className="bg-white p-10" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="text-gray-800 font-bold text-2xl mb-1">Bienvenido a WePlot</h1>
        <p className="text-sm font-normal text-gray-600 mb-7">Diligencia el formulario</p>

        <div className="flex flex-wrap -mx-2">
          {/* Nombre y Apellido */}
          <div className="w-1/2 px-2">
            <FormInput
              name="nombre"
              placeholder="Nombre"
              register={register}
              error={errors.nombre?.message}
            />
          </div>
          <div className="w-1/2 px-2">
            <FormInput
              name="apellido"
              placeholder="Apellido"
              register={register}
              error={errors.apellido?.message}
            />
          </div>

          {/* Email y Teléfono */}
          <div className="w-1/2 px-2">
            <FormInput
              name="email"
              placeholder="Email"
              register={register}
              error={errors.email?.message}
            />
          </div>
          <div className="w-1/2 px-2">
            <FormInput
              name="telefono"
              placeholder="Teléfono"
              register={register}
              error={errors.telefono?.message}
            />
          </div>

          {/* País */}
          <div className="w-full px-2">
            <FormInput
              name="pais"
              placeholder="País"
              register={register}
              error={errors.pais?.message}
            />
          </div>

          {/* Comida y Artista Favorito */}
          <div className="w-1/2 px-2">
            <FormInput
              name="comidaFavorita"
              placeholder="Comida Favorita"
              register={register}
              error={errors.comidaFavorita?.message}
            />
          </div>
          <div className="w-1/2 px-2">
            <FormInput
              name="artistaFavorito"
              placeholder="Artista Favorito"
              register={register}
              error={errors.artistaFavorito?.message}
            />
          </div>

          {/* Lugar y Color Favorito */}
          <div className="w-1/2 px-2">
            <FormInput
              name="lugarFavorito"
              placeholder="Lugar Favorito"
              register={register}
              error={errors.lugarFavorito?.message}
            />
          </div>
          <div className="w-1/2 px-2">
            <FormInput
              name="colorFavorito"
              placeholder="Color Favorito"
              register={register}
              error={errors.colorFavorito?.message}
            />
          </div>

          {/* Contraseña y Confirmar Contraseña */}
          <div className="w-1/2 px-2">
            <FormInput
              name="password"
              placeholder="Contraseña"
              register={register}
              error={errors.password?.message}
              type="password"
            />
          </div>
          <div className="w-1/2 px-2">
            <FormInput
              name="confirmarContraseña"
              placeholder="Confirmar Contraseña"
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
