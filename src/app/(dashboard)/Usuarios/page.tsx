import { UserGrid } from "@/components";

export const metadata = {
  title: 'Usuarios registrados',
  description: 'Usuarios registrados',
};

export default function UsuariosPage() {
  return (
    <div>
      <UserGrid />
    </div>
  );
}