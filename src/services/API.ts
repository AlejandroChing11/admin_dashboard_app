import { User } from '../interfaces';

import axios from 'axios';

export default {

  async register(userData: User) {

    try {

      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/registro`, userData);

      return response.data;

    } catch (error: any) {

      if (error.response) {
        throw new Error(error.response.data.message || 'Error en el registro');
      }

      throw new Error('Error de conexion')

    }

  }

}
