'use client';

import { useState } from 'react';

import { useForm } from 'react-hook-form';

import API from '@/services/API';
import useToken from '@/hooks/useToken';
import { EditData } from '@/interfaces/editUserData.interface';

interface Props {
  user: EditData;
  onSave: (updatedUser: EditData) => void;
}

export function EditForm({ user, onSave }: Props) {
  const { register, handleSubmit } = useForm<EditData>({
    defaultValues: {
      comidaFavorita: user.comidaFavorita,
      artistaFavorito: user.artistaFavorito,
      lugarFavorito: user.lugarFavorito,
      colorFavorito: user.colorFavorito,
    }
  });

  const token = useToken();
  const [message, setMessage] = useState<string | null>(null);

  const onSubmit = async (updatedData: EditData) => {
    if (!token) {
      setMessage('Token no disponible para autenticación.');
      return;
    }

    try {
      const updatedUserData = await API.editUserPreferences(user.id, updatedData, token);
      onSave(updatedUserData);
      setMessage('Preferencias actualizadas exitosamente.');
    } catch (error) {
      setMessage(`Error al actualizar preferencias`);
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <h3 className="text-lg font-semibold mb-2">Editar Preferencias</h3>
      {message && <p className="text-sm font-medium text-red-500">{message}</p>}
      <div>
        <label className="block text-sm font-medium text-gray-700">Comida Favorita</label>
        <input
          type="text"
          {...register('comidaFavorita')}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Artista Favorito</label>
        <input
          type="text"
          {...register('artistaFavorito')}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Lugar Favorito</label>
        <input
          type="text"
          {...register('lugarFavorito')}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Color Favorito</label>
        <input
          type="text"
          {...register('colorFavorito')}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none"
        />
      </div>
      <button
        type="submit"
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Guardar cambios
      </button>
    </form>
  );
}
