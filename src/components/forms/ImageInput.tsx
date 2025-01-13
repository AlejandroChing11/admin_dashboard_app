import { UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { User } from '@/interfaces';

interface ImageInputProps {
  register: UseFormRegister<User>;
  setValue: UseFormSetValue<User>;
  error?: string;
  setImagePreview: (preview: string | null) => void;
}

export const ImageInput = ({ register, error, setImagePreview, setValue }: ImageInputProps) => {
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (!file.type.startsWith('image/')) {
        alert('Por favor, selecciona un archivo de imagen válido');
        return;
      }

      setValue('imagen', file, { shouldValidate: true });

      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="mb-4">
      <label className="block text-slate-500 text-sm font-semibold mb-2">
        Imagen de Perfil
        <span className="text-red-500 ml-1">*</span>
      </label>
      <input
        type="file"
        accept="image/*"
        className="hidden"
        id="imagen"
        {...register('imagen', {
          validate: (value) => {
            if (value instanceof FileList) {
              return value.length > 0 || 'La imagen es obligatoria';
            }
            return value instanceof File || 'La imagen es obligatoria';
          }
        })}
        onChange={handleImageChange}
      />
      <label
        htmlFor="imagen"
        className="flex items-center justify-center border-2 border-dashed border-gray-300 rounded-2xl p-4 cursor-pointer hover:border-indigo-600 transition-colors"
      >
        <div className="text-center">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 48 48"
          >
            <path
              d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
            />
          </svg>
          <p className="mt-1 text-sm text-gray-600">
            Click para seleccionar imagen
          </p>
        </div>
      </label>
      {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
    </div>
  );
};
