export interface RegisteredUser {
  id: string;
  nombre: string;
  apellido: string;
  email: string;
  telefono: string;
  pais: string;
  isActive: boolean;
  imagePath: string;
  comidaFavorita: string;
  artistaFavorito: string;
  lugarFavorito: string;
  colorFavorito: string;
  roles: string[];
  createdAt: Date;
  updatedAt: Date;
}
