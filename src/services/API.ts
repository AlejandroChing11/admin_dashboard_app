import { EditData } from '@/interfaces/editUserData.interface';
import { LoginData, User } from '../interfaces';

import axios from 'axios';

export default {

  async register(userData: User, adminCode: string) {

    try {

      const formData = new FormData();

      Object.keys(userData).forEach(key => {
        if (key === 'imagen' && userData.imagen instanceof File) {
          formData.append('imagen', userData.imagen);
        } else {
          formData.append(key, userData[key as keyof User] as string)
        }
      })

      console.log('Contenido del FormData:');
      for (let pair of formData.entries()) {
        console.log(pair[0], pair[1]);
      }

      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/registro?adminPass=${adminCode}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      return response.data;

    } catch (error: any) {

      if (error.response) {
        throw new Error(error.response.data.message || 'Error en el registro');
      }

      throw new Error('Error de conexion')

    }

  },

  async login(userData: LoginData) {

    try {

      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, userData);

      return response.data;

    } catch (error: any) {

      console.log(error);

    }


  },

  async getMe(token: string | null) {

    if (!token) {
      throw new Error('Token no proporcionado');
    }

    try {

      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/auth/getMe`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      return response.data;

    } catch (error: any) {

      if (error.response) {
        throw new Error(error.response.data.message || 'Error al obtener el usuario');
      }

      throw new Error('Error de conexion')

    }

  },

  async getUsers(token: string | null) {
    try {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/common/registros`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      return response.data;

    } catch (error) {
      console.log(error);
    }
  },

  async editUserPreferences(userId: string, preferences: EditData, token: string) {
    try {
      const response = await axios.patch(
        `${process.env.NEXT_PUBLIC_API_URL}/common/${userId}/editar-preferencias`,
        preferences,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'application/json',
          },
        }
      );
      return response.data;
    } catch (error: any) {
      if (error.response) {
        throw new Error(error.response.data.message || 'Error al actualizar preferencias');
      }
      throw new Error('Error de conexion');
    }
  },


}
