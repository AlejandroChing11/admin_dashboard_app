import { LoginData, User } from '../interfaces';

import axios from 'axios';

export default {

  async register(userData: User) {

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

      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/registro`, formData, {
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

      if (error.response) {
        throw new Error(error.response.data.message || 'Error en el login');
      }

      throw new Error('Error de conexion')

    }


  }

}
