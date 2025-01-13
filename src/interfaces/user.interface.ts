export interface User {
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  pais: string;
  comidaFavorita: string;
  artistaFavorito: string;
  lugarFavorito: string;
  colorFavorito: string;
  password: string;
  confirmarContraseña: string;
  imagen: File | FileList | null;
}