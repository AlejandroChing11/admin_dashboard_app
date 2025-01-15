import { CustomWidget } from "@/components";


export const metadata = {
  title: 'We Plot | Perfil',
  description: 'Informacion de tu perfil!',
};

export default function PerfilPage() {
  return (
    <div
      className="flex flex-col w-full h-full"
    >
      <CustomWidget />
    </div>
  );
}