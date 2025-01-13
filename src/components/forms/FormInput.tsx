import { FormInputProps } from "@/interfaces";

export function FormInput({
  label,
  isRequired,
  name,
  register,
  type = "text",
  error
}: FormInputProps) {
  const validationRules = isRequired
    ? { required: `El campo ${label} es obligatorio` }
    : {};

  return (
    <>
      <label className="block text-slate-500 text-sm font-semibold mb-2">
        {label}
        {isRequired && <span className="text-red-500 ml-1">*</span>}
      </label>
      <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-2">
        <input
          type={type}
          className="pl-2 outline-none border-none flex-grow text-slate-500"
          {...register(name, validationRules)}
        />
      </div>
      {error && <p className="text-red-500">{error}</p>}
    </>
  );
}
